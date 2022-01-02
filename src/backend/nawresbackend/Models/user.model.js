'use strict';
var dbConn = require('../config/db.config');


//user object create
var user = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.status = user.status;
};
user.create = function (newUser, result) {
    dbConn.query("INSERT INTO user set ?", newUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
user.findById = function (id, result) {
    dbConn.query("Select * from user where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
user.findAll = function (result) {
    dbConn.query("Select * from user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};
user.update = function (id, user, result) {
    dbConn.query("UPDATE user SET first_name=?,last_name=? WHERE id = ?", [user.first_name, user.last_name, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

user.updateStatus = function (id, status, result) {
    dbConn.query("UPDATE user SET status=? WHERE id = ?", [status, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};    

module.exports = user;


