const mysql = require('mysql');
const {promisify} = require('util');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'superman1',
    database: 'COEDIN'
});

pool.getConnection((err , connection) => {
    if(err){
        console.log('Fallo la conexion');
        
    }else{
        console.log('DATABASE ONLINE');
    }
})

pool.query = promisify(pool.query);

module.exports = pool;