let express = require('express')
let cors = require('cors')
let app = express()
let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(cors())

app.get('/api/v1/ping', function (req, res) {
  res.json({
    'res': 'ping_request_received'
  })
  console.log('ping request received')
})
app.post('/api/v1/settings', function (req, res) {
  let id = req.body.id
  let value = req.body.value
  // let type = req.body.type
  // let message = req.body.message
  res.json({
    'res': 'request_valid'
  })
  console.log('POST REQUEST:\nid: ' + id + '\nvalue: ' + value)
})

app.listen(7070, function () {
  console.log('Listening on port 7070.')
})
