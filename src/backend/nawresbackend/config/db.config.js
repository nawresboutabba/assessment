'use strict';
const mysql = require('mysql2');
//create connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '123456789',
	database: 'digitalback',
	port: '3308'
});


//connect
db.connect((err) => {
	if (err) {
		throw err;
	}
	console.log('mysql connected');
});

module.exports = db;