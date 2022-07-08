import { getItems, getItemById } from '../../service'

type TGenresFn = (limit?: number, offset?: number) => Promise<any>

type TGenreArgs = {
  id: string
}

type TGenre = (args: TGenreArgs) => Promise<any>

const genresUrl = process.env.GENRES_URL || 'http://localhost:3001/v1/genres'

export const genres: TGenresFn = (limit, offset) => getItems(genresUrl, { limit, offset })

export const genre: TGenre = ({id}) => getItemById(genresUrl, id)
