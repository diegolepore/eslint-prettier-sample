import express from 'express'

const app = express()
const port = 3000

// set endpoint
app.get('/api', (req, res) => {
  res.send('/api endpoint ready')
})

// check for port to avoid already in use error testing
app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`)
)

export default app
