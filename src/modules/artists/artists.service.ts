import { getItems, getItemById } from '../../service'
import { TArtist, TArtists } from './artists'

const ARTISTS_URL = process.env.ARTISTS_URL || 'http://localhost:3002/v1/artists'

export const artists: TArtists = (limit, offset) => getItems(ARTISTS_URL, { limit, offset })
export const artist: TArtist = ({id}) => getItemById(ARTISTS_URL, id)
