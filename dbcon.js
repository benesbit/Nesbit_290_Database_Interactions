var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_nesbitb',
  password        : '6876', //6876
  database        : 'cs290_nesbitb'
});

module.exports.pool = pool;
