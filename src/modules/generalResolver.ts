import { genres, genre } from './genres/genres.service'
import { artists, artist } from './artists/artists.service'
import { band, bands } from './bands/bands.service'

const resolvers = {
  genres: genres(),
  artists: artists(),
  bands: bands(),

  genre: (args: any) => genre(args),
  artist: (args: any) => artist(args),
  band: (args: any) => band(args),
}

export default resolvers
