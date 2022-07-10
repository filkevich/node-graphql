const artistsSchema = `
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  type Query {
    artists: [Artist]
    artist(id: ID!): Artist
  }
`
export default artistsSchema
