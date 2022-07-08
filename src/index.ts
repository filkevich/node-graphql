import express from 'express'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import schemas from './modules/generalSchema'
import resolvers from './modules/generalResolver'

dotenv.config()

const app = express()
const port = process.env.GRAPHQL_PORT || 5000

app.use('/', graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true,
}))

app.listen(port, () => {
  console.log(`The graphql server is running on http://localhost:${port}/`)
})
