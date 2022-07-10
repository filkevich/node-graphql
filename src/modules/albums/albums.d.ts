export type TAlbumObj = {
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

export type TAlbumsArgs = { id: string }
export type TAlbums = (limit?: number, offset?: number) => Promise<TAlbumObj[]>
export type TAlbum = (args: TAlbumsArgs) => Promise<TAlbumObj>
