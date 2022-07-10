export type TTrackObj = {
  _id: string,
  title: string,
  albumId: string,
  artistsIds: string[],
  bandsIds: string[],
  duration: number,
  released: number,
  genresIds: string[],
}

export type TTrackArgs = { id: string }
export type TTracks = (limit?: number, offset?: number) => Promise<TTrackObj[]>
export type TTrack = (args: TTrackArgs) => Promise<TTrackObj>
