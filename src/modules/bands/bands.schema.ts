const bandsSchema = `
  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    id: ID
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
  }
`
export default bandsSchema
