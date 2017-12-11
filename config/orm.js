var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT tasks.task_id, tasks.taskname, user_chores.user_id, user.username " +
            "FROM ((tasks " +
            "INNER JOIN user_chores ON tasks.task_id = user_chores.task_id) " +
            "INNER JOIN user ON user.user_id = user_chores.user_id); "
        connection.query(queryString, [tableInput], function(err, result) {
            console.log(result);
        });
    },
    //selectAll: function(tableInput) {
    //    var queryString = "SELECT * FROM ??";
    //    connection.query(queryString, [tableInput], function(err, result) {
    //        console.log(result);
    //    });
    //},
    selectWhere: function(tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
            console.log(result);
        });
    },
    selectAndOrder: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
            console.log(result);
        });
    },
    findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;