import { genres, genre } from './genres/genres.service'

const resolvers = {
  genres: genres(),
  genre: (args: any) => genre(args),
}

export default resolvers
