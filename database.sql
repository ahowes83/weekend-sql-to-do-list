
-- `SELECT * FROM "weekend-to-do-app" ORDER BY id ASC`
-- `INSERT INTO "weekend-to-do-app" (added, task, complete) VALUES($1, $2, $3)`
-- `UPDATE "weekend-to-do-app" complete=True WHERE id=$1;`
-- `DELETE FROM "weekend-to-do-app" WHERE id=$1;`

-- Queries made in Postico:

-- select * from "weekend-to-do-app";

-- alter table "weekend-to-do-app"
-- add task varchar(100);

-- ALTER TABLE "weekend-to-do-app"
-- ADD complete boolean default False;

-- alter table "weekend-to-do-app"
-- add added DATE;

-- alter table "weekend-to-do-app"
-- alter column added type varchar(50);

-- create or replace function set_complete_time() returns trigger as $now_time$
-- begin
-- 	if old.complete = false and new.complete = true then
-- 		new.time_completed := to_char(localtimestamp, 'MON/DD/YYYY HH12:MIPM');
-- 	end if;
-- 	return new;
-- end;
-- $now_time$
-- language 'plpgsql';
-- create trigger set_complete_time before update on "weekend-to-do-app" for each row execute procedure set_complete_time();

-- alter table "weekend-to-do-app"
-- add time_completed timestamp;

-- do $$
-- declare
-- 	truncated timestamp := date_trunc('minute', localtimestamp)
-- 	date_string varchar(20) := to_char(truncated)
-- 	cut_down_date varchar(20) := substring(date_string, 0, 17)
-- end $$;

