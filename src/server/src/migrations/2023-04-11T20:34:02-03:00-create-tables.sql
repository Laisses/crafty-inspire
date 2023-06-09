CREATE TABLE users (
	id uuid PRIMARY KEY,
	name TEXT NOT NULL,
	username TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	email TEXT NOT NULL UNIQUE,
	created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE projects (
	id uuid NOT NULL PRIMARY KEY,
	user_id uuid NOT NULL REFERENCES users(id),
	name TEXT NOT NULL,
	link TEXT,
	image TEXT,
	author TEXT,
	description TEXT,
	supplies TEXT,
	notes TEXT,
	created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE tags (
	id uuid NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE projects_tags (
	project_id uuid NOT NULL REFERENCES projects(id),
	tag_id     uuid NOT NULL REFERENCES tags(id),
	UNIQUE(project_id, tag_id)
);
