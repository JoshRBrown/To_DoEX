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
    return db.oneOrnone('SELECT * FROM todolist where id=$1', [id])
    // .then(function(data) {
        // success;
        // console.log(data);
    // })
    // .catch(function(error) {
        // error;
        // console.log(error);
    // });
};
function getAll(){
    return db.any('SELECT * FROM todolist')
}

function getIncomplete(){
    return db.any('select * from todolist where isdone=$1', [false])
}
function getComplete(){
    return db.any('select * from todolist where isdone=$1', [true])
}

getComplete()
    .then ((data) => {console.log(data);})
    .catch ((error) => {console.log(error);})



module.exports = {
    getOne,
    getIncomplete,
    getComplete,
    getAll
};

