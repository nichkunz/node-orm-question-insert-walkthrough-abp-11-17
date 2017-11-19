const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })
    })
  }

  constructor(content){
    this.content = content
  }

  insert() {
    const sql = `INSERT INTO questions Value (?)`
    const self = this
    return new Promise(function(resolve){
      db.run(sql, [this.content], function(err, result){
        resolve("Row inserted!")
      })
    })
  }
}


module.exports = Question;
