import express from 'express'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import generalSchema from './modules/generalSchema'
import { genres } from './modules/genres/genres.service'

dotenv.config()

const app = express()
const port = process.env.GRAPHQL_PORT || 5000

const root = {
  genres: genres()
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', graphqlHTTP({
  schema: generalSchema,
  rootValue: root,
  graphiql: true,
}))

app.listen(port, () => {
  console.log(`The graphql server is running on http://localhost:${port}/`)
})


