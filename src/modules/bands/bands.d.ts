export type TBandObj = {
  _id: string;
  name: string;
  origin: string;
  membersId: Member[];
  website: string;
  genresIds: string[];
}

export type TBandsArgs = { id: string }
export type TBands = (limit?: number, offset?: number) => Promise<TBandObj[]>
export type TBand = (args: TBandsArgs) => Promise<TBandObj>
