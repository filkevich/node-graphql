import { getItems } from '../../service'

type TGenresFn = (limit?: number, offset?: number) => Promise<any>

const genresUrl = process.env.GENRES_URL || 'http://localhost:3001/v1/genres'

export const genres: TGenresFn = (limit, offset) => getItems(genresUrl, { limit, offset })
