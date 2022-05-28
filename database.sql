
-- `SELECT * FROM "weekend-to-do-app" ORDER BY id ASC``UPDATE "weekend-to-do-app" complete=True WHERE id=$1;`
-- `INSERT INTO "weekend-to-do-app" (added, task, complete) VALUES($1, $2, $3)`
-- `UPDATE "weekend-to-do-app" complete=True WHERE id=$1;`
-- `DELETE FROM "weekend-to-do-app" WHERE id=$1;`

-- Queries made in Postico (some are dysfunctional):

-- select * from "weekend-to-do-app";

-- ALTER TABLE "weekend-to-do-app"
-- ADD task varchar(32);

-- alter table "weekend-to-do-app"
-- add task varchar(100);

-- ALTER TABLE "weekend-to-do-app"
-- ADD complete boolean default False;

-- SELECT DATE_TRUNC('minute', localtimestamp);

-- alter table "weekend-to-do-app"
-- add added DATE;

-- alter table "weekend-to-do-app"
-- alter column added type varchar(50);

-- alter table "weekend-to-do-app"
-- add time_completed varchar(50);

-- drop trigger set_complete_time
-- on "weekend-to-do-app";

-- alter table "weekend-to-do-app"
-- alter column time_completed set default 'uncompleted';

-- create or replace function set_complete_time() returns trigger as $now_time$
-- begin
-- 	if old.complete = false and new.complete = true then
-- 		new.time_completed := DATE_TRUNC('minute', localtimestamp);
-- 	end if;
-- 	return new;
-- end;
-- $now_time$
-- language 'plpgsql';
-- create trigger set_complete_time before update on "weekend-to-do-app" for each row execute procedure set_complete_time();

-- alter table "weekend-to-do-app"
-- alter column time_completed type timestamptz using time_completed::timestamp with time zone;

-- alter table "weekend-to-do-app"
-- add time_completed timestamp;

-- update "weekend-to-do-app" set complete = true where id = 5;


