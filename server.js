var express = require('express')
const app = express()

app.use(express.static('dist'))

app.listen(3000, function () {
  console.log('listening on port 3000') // eslint-disable-line no-console
})
