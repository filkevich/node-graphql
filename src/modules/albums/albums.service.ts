import { getItems, getItemById } from '../../service'
import { TAlbum, TAlbums } from './albums'

const ALBUMS_URL = process.env.ALBUMS_URL || 'http://localhost:3005/v1/albums'

export const albums: TAlbums = (limit, offset) => getItems(ALBUMS_URL, { limit, offset })
export const album: TAlbum = ({id}) => getItemById(ALBUMS_URL, id)
