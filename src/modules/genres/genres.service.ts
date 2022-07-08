import { getItems, getItemById } from '../../service'
import { TGenres, TGenre } from './genres'

const GENRES_URL = process.env.GENRES_URL || 'http://localhost:3001/v1/genres'

export const genres: TGenres = (limit, offset) => getItems(GENRES_URL, { limit, offset })
export const genre: TGenre = ({id}) => getItemById(GENRES_URL, id)
