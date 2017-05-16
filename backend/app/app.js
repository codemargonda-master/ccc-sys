var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')

const app = express()

app.use(bodyParser.urlencoded({extended: true})) // support x-www-form-urlencoded
app.use(bodyParser.json())

var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'ccc_system'})

connection.connect(function (err) {
  if (!err) {
    console.log('Database is connected ...')
  } else {
    console.log('Error connecting database ... ')
  }
})

app.get('/', function (req, res) {
  res.send({
    msg: 'Hello from server!'
  })
})

app.get('/get', function (req, res) {
  var query = "SELECT * FROM user WHERE name='alfon' "

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
  var data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  console.log(data)

  if (!data.name && !data.email && data.password) {
    res.send({success: false, msg: 'Data incompplete'})
  } else {
    connection.query('INSERT INTO user set ? ', data, function (err, rows) {
      if (err) {
        res.send(err)
      }
      res.json({success: true, msg: 'Insert Success'})
      console.log('Insert Success')
    })
  }
})

app.post('/signin', function (req, res) {
  var data = {
    email: req.body.email,
    password: req.body.password
  }

  var query = 'SELECT * FROM user WHERE email= ' + mysql.escape(data.email) + ' AND password= ' + mysql.escape(data.password) + ''

  connection.query(query, function (err, rows, fields) {
    if (err) {
      throw err
    }
    res.json({success: true, msg: 'User Exist', email: rows[0].email, password: rows[0].password})
  })
})

module.exports = app
