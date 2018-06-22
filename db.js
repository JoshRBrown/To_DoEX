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
    // .then(function(data) {
        // success;
        // console.log(data);
    // })
    // .catch(function(error) {
        // error;
        // console.log(error);
    // });
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


function setItemFinished(id){
    return db.none('update todolist set isdone=true where id=$1', [id])
};

function deleteById(id){
    return db.result('delete from todolist where id=$1', [id])
};
setItemFinished(5)
    .then((data) => {console.log(data);})
    .catch((error) => {console.log(error);})
// deleteById(11)
    // .then((data) => {console.log(data);})
    // .catch((error) => {console.log(error);})

module.exports = {
    getOne,
    getIncomplete,
    getComplete,
    getAll,
    getByString
};

