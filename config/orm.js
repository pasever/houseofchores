var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(tableInput, cb) {
        //var queryString = "SELECT * FROM " + tableInput + ";";
        var queryString = "SELECT tasks.task_id, tasks.taskname, user_chores.user_id, user.username, sched_day " +
            "FROM ((tasks " +
            "INNER JOIN user_chores ON tasks.task_id = user_chores.task_id) " +
            "INNER JOIN user ON user.user_id = user_chores.user_id); ";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    selectAllDays: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    selectAllTasks: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    selectWhere: function(tableInput, colToSearch, valOfCol, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        console.log('qry:', queryString);
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    selectAndOrder: function(whatToSelect, table, orderCol, cb) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo, cb) {
        var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
        connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;