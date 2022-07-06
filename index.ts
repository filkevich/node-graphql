import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.status(200)
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}/`)
})
