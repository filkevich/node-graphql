type TGetParams = {
  limit: number | undefined,
  offset: number | undefined
}

export type TGetItems = (url: string, params?: TGetParams) => Promise<any>
export type TGetItemByID = (url: string, id: string) => Promise<any>
