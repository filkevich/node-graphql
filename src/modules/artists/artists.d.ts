export type TArtistObj = {
  _id: string,
  firstName: string,
  secondName: string,
  middleName: string,
  birthDate: string,
  birthPlace: string,
  country: string,
  bandsIds: string[],
  instruments: string[],
}

export type TArtistsArgs = { id: string }
export type TArtists = (limit?: number, offset?: number) => Promise<TArtistObj[]>
export type TArtist = (args: TArtistsArgs) => Promise<TArtistObj>
