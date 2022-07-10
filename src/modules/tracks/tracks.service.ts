import { getItems, getItemById } from '../../service'
import { TTrack, TTracks } from './tracks'

const TRACKS_URL = process.env.GENRES_URL || 'http://localhost:3006/v1/tracks'

export const tracks: TTracks = (limit, offset) => getItems(TRACKS_URL, { limit, offset })
export const track: TTrack = ({id}) => getItemById(TRACKS_URL, id)
