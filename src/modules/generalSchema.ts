import { makeExecutableSchema } from '@graphql-tools/schema'

import albumsSchema from './albums/albums.schema'
import artistsSchema from './artists/artists.schema'
import bandsSchema from './bands/bands.schema'
import favouritesSchema from './favourites/favourites.schema'
import genresSchema from './genres/genres.schema'
import tracksSchema from './tracks/tracks.schema'
import usersSchema from './users/users.schema'

const generalSchema = makeExecutableSchema({
  typeDefs: [
    albumsSchema,
    artistsSchema,
    bandsSchema,
    favouritesSchema,
    genresSchema,
    tracksSchema,
    usersSchema
  ]
})

export default generalSchema
