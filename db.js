const pgp = require('pg-promise')();
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'to-do-app',
    user: 'postgres',
    password: ''
}
const db = pgp(cn);


function getOne(id){
    return db.any('SELECT * FROM todolist where id=$1', [id])
};
// getOne()
    // .then ((data) => {console.log(data);})
    // .catch ((error) => {console.log(error);})


function getAll(){
    return db.any('SELECT * FROM todolist')
}
// getAll()
    // .then ((data) => {console.log(data);})
    // .catch ((error) => {console.log(error);})

function getIncomplete(){
    return db.any('select * from todolist where isdone=$1', [false])
}
// getIncomplete()
    // .then((data) => {console.log(Data);})
    // .catch((error) => {console.log(error);})

function getComplete(){
    return db.any('select * from todolist where isdone=$1', [true])
}

// getComplete()
    // .then ((data) => {console.log(data);})
    // .catch ((error) => {console.log(error);})


function getByString(srch){
    return db.any('select * from todolist where title ilike $1', [`%${srch}%`])
};
// getByString('sc')
    // .then((data) => {console.log(data);})
    // .catch((error) => {console.log(error);})


function setFinished(id, isDone){
    return db.result('update todolist set isdone=$1 where id=$2', [isDone, id])
};
// setFinished(6, true)
    // .then((data) => {console.log(data);})
    // .catch((error) => {console.log(error);})


function deleteById(id){
    return db.result('delete from todolist where id=$1', [id])
};
// deleteById(11)
    // .then((data) => {console.log(data);})
    // .catch((error) => {console.log(error);})


function changeTitle(id, newTitle){
    return db.result('update todolist set title=$1 where id=$2', [newTitle, id])
};
// changeTitle(2, 'brush the dog')
    // .then((data) => {console.log(data);})
    // .catch((error) => {console.log(error);})

function newTask(title, isDone) {
    return db.one('insert into todolist(title, isdone) values($1, $2)', [title, isDone])
}
newTask('go to bed', false)
    .then((data) => {console.log(data);})
    .catch((error) => {console.log(error);})

module.exports = {
    getOne,
    getIncomplete,
    getComplete,
    getAll,
    getByString,
    deleteById,
    setFinished,
    changeTitle,
    newTask
};

