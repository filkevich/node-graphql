const genresSchema = `
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genres: [Genre]
    genre(id: ID!): Genre
  }
`
export default genresSchema
