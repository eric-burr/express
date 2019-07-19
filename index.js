const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

let contacts = [];

app.get('/', function (req, res) {
    return res.send(contacts);


 //   res.send('Hello World!')
  })

app.post('/', function (req, res) {
    let input = req.body;
    contacts.push(input);
    res.send('new user created!')
  })
 
  app.put('/', function (req, res) {
    res.send('Got a PUT request at /user')
  })