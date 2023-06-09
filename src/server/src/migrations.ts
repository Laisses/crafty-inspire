import { readdir, readFile } from "node:fs/promises";

const difference = (set1, set2) =>
	new Set([...set1].filter(x => !set2.has(x)));

const MIGRATIONS_DIR = "src/migrations";

const runMigration = async (conn, verbose, filename) => {
	const path = `${MIGRATIONS_DIR}/${filename}`;
	const file = await readFile(path, { encoding: "utf-8" });

	verbose && console.warn(`Running migration ${path}...`);
	await conn.query("BEGIN TRANSACTION;");
	try {
		await conn.query(file);
		await conn.query(`
			INSERT INTO migrations (name) VALUES ($1);
		`, [ filename ]);
		await conn.query("COMMIT TRANSACTION;");
		verbose && console.warn("DONE!");
	} catch (e) {
		verbose && console.warn("FAILED!");
		await conn.query("ROLLBACK;");
		throw e;
	}
};

export const run = async (conn, { verbose } = { verbose: true }) => {
	await conn.query("CREATE TABLE IF NOT EXISTS migrations (name TEXT UNIQUE);");

	const files = await readdir(MIGRATIONS_DIR);
	const migrations = await conn.query("SELECT name FROM migrations;");

	const pending = new Set(files);
	const done    = new Set(migrations.rows.map(r => r.name));
	const todo    = [...difference(pending, done)].sort();


	for (const f of todo) {
		await runMigration(conn, verbose, f);
	}
};
