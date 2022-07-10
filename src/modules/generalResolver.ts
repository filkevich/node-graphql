import { genres, genre } from './genres/genres.service'
import { artists, artist } from './artists/artists.service'
import { band, bands } from './bands/bands.service'
import { albums, album } from './albums/albums.service'

const resolvers = {
  genres: genres(),
  artists: artists(),
  bands: bands(),
  albums: albums(),

  genre: (args: any) => genre(args),
  artist: (args: any) => artist(args),
  band: (args: any) => band(args),
  album: (args: any) => album(args),
}

export default resolvers
