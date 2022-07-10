export type TGenreObj = {
  _id: string,
  name: string,
  description: string,
  country: string,
  year: number,
}

export type TGenreArgs = { id: string }
export type TGenres = (limit?: number, offset?: number) => Promise<TGenreArgs[]>
export type TGenre = (args: TGenreArgs) => Promise<TGenreObj>
