import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
import { graphqlHTTP } from 'express-graphql'
import generalSchema from './modules/generalSchema'

dotenv.config()

const app = express()
const port = process.env.GRAPHQL_PORT || 5000

const root = {
  artists: async () => {
    const { data: { items } } = await axios.get('http://localhost:3002/v1/artists')
    return items
  },
  genres: async () => {
    const { data: { items } } = await axios.get('http://localhost:3001/v1/genres')
    return items
  }
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


