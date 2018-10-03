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
  }
  // selectCreate: function(tableCreate, col, val, cb){
  //   var queryCreate = `INSERT INTO ${tableCreate}`
  // }
}

module.exports = orm;


