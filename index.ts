import express from 'express'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'Hello world!'
  }
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.get('/', (_, res) => {
  res.status(200)
  res.send('Hello world')
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}/`)
})
