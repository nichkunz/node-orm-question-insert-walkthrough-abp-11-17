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
    const self = this
    const SQL = `INSERT INTO questions (content) VALUES (?)`
    return new Promise(function(resolve){
      
    resolve(self)
    })

  }


}






//   insert(){
//     const self = this
//     const sql = `INSERT INTO questions (name, age) VALUES (?, ?)`
//     console.log(`Inserting user ${self.name} into database...`)
//     return new Promise(function(resolve){
//       db.run(sql, [self.name, self.age], function(){
//         console.log(`...user ${this.lastID} inserted into database`)
//         self.id = this.lastID
//         resolve(self)
//       })
//     })
//       //  `INSERT INTO questions (content) VALUES (?)`
//       // self.id = this.lastID
//       // resolve(self)
//   })
// }
// //   }
// // }
//
// // db.run(sql, [self.name, self.age], function(){
// //   console.log(`...user ${this.lastID} inserted into database`)
// //   self.id = this.lastID
// //   resolve(self)
// // })



module.exports = Question;
