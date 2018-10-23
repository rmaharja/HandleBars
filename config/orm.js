var connection = require("./connection.js");

var orm = {
  selectAll: function(tableAll, cb){
    var queryAll = `SELECT * FROM ${tableAll};`;
    connection.query(queryAll, function (err, allResult){
      if (err){
        throw err;
      }
      console.log("query:"+queryAll);
      console.log("query:"+ allResult);
      cb(allResult);
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
  }
  // selectCreate: function(tableCreate, col, val, cb){
  //   var queryCreate = `INSERT INTO ${tableCreate}`
  // }
}

module.exports = orm;


