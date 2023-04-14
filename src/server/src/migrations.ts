export const run = async () => {
    // CREATE TABLE IF NOT EXISTS migrations (name TEXT UNIQUE);
    // lista migrations pendentes: src/server/src/migrations/*.sql
    // lista migrations feitas: SELECT name FROM migrations;
    // subtrai um do outro;
    // executa 1 por uma e insere no banco
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null);
        }, 100)
    })
};