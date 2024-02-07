const express = require('express')
const locations = require('./locations')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static('src'))

app.get('/locations', (req, res) => {
  res.json(locations)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})