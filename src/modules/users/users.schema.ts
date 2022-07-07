const usersSchema = `
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }
`
export default usersSchema
