import { genres, genre } from './genres/genres.service'
import { artists, artist } from './artists/artists.service'

const resolvers = {
  genres: genres(),
  artists: artists(),

  genre: (args: any) => genre(args),
  artist: (args: any) => artist(args),
}

export default resolvers
