const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

app.use(bodyParser.urlencoded({extended: true})) // support x-www-form-urlencoded
app.use(bodyParser.json())

const connection = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'ccc_system'})

connection.connect(function (err) {
  if (!err) {
    console.log('Database is connected ...')
  } else {
    console.log('Error connecting database ... ')
  }
})

app.get('/', function (req, res) {
  res.send({msg: 'Hello from server!'})
})

app.get('/get', function (req, res) {
  const query = "SELECT * FROM user WHERE name='alfon' "

  connection.query(query, function (err, rows) {
    if (err) { throw err }
    res.json({success: true, msg: 'Success'})
  })
})
// post data to DB | POST (register)
app.post('/auth', function (req, res) {
  // // validation
  // req.assert('name', 'Name is required').notEmpty();
  // req.assert('email', 'A valid email is required').isEmail();
  // req.assert('password', 'Enter a password 6 - 20').len(6, 20);
  //
  // var errors = req.validationErrors();
  // if (errors) {
  //   res.status(422).json(errors);
  //   return;
  // }

  // get data
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  var query = 'SELECT count(*) as count FROM t_user WHERE email= ' + mysql.escape(data.email)

  connection.query(query, function (error, rows) {
    if (rows[0].count != 1) {
      connection.query('INSERT INTO t_user set ? ', data, function (error, rows) {
        if (error) {
          res.send(error)
        }
        res.status(200).json({success: true, msg: 'Insert Success'})
        console.log('Insert Success')
      })
    } else if (rows[0].count = 1) {
      res.status(401).json({success: false, msg: 'Data already exist!'})
      console.log('Data already exist!')
    } else {
      res.send(error)
    }
  })
})

app.post('/signin', function (req, res) {
  var data = {
    email: req.body.email,
    password: req.body.password
  }

  var query = 'SELECT * FROM user WHERE email= ' + mysql.escape(data.email) + ' AND password= ' + mysql.escape(data.password) + ''

  connection.query(query, function (error, rows, fields) {
    if (rows[0].count != 1) {
      res.status(401).json({success: 'false', msg: 'Data invalid'})
      console.log('Data invalid!')
    } else if (rows[0].count = 1) {
      res.status(200).json({success: 'true', msg: 'User Exist', email: rows[0].email, password: rows[0].password})
      console.log('Login successfully!')
    } else {
      res.send(error)
    }
  })
})

module.exports = app
