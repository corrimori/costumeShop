const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const costumeRoutes = require('./src/routes/costumes.js')
// app.use('/costumes', costumeRoutes)

app.all('*', (req, res, next) => res.sendStatus(404))

app.use((err, req, res, next) => {
  res.status(err.status).json(err)
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`That Song is playing on port ${port}!`)
  })
}

module.exports = app
