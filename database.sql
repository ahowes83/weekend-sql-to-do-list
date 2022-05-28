
`SELECT * FROM "weekend-to-do-app" ORDER BY id ASC``UPDATE "weekend-to-do-app" complete=True WHERE id=$1;`
`INSERT INTO "weekend-to-do-app" (added, task, complete) VALUES($1, $2, $3)`
`UPDATE "weekend-to-do-app" complete=True WHERE id=$1;`
`DELETE FROM "weekend-to-do-app" WHERE id=$1;`