
-- get all the todos
select * from todolist;


-- get one todo by id
select * from todolist
where id=2;


-- get all unfinished tasks
select * from todolist
where isdone=false;

-- get all finished tasks
select * from todolist
where isdone=true;

-- search by title
select * from todolist
where title ilike '%sc%';

-- mark item as finished
update todolist
    set isdone=true
    where id=1;

-- mark item as unfinished
update todolist
    set isdone=false
    where id=2;

-- change title text
update todolist
    set title='blue'
    where id=1;

-- delete a todo by id
delete from todolist
    where id=4;
