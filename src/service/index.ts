import axios from 'axios'

type TGetParams = {
  limit: number | undefined,
  offset: number | undefined
}

type TGetItemsFn = (url: string, params?: TGetParams) => Promise<any>

type TGenre = {
  _id: string,
  name: string,
  description: string,
  country: string,
  year: number,
}

export const getItems: TGetItemsFn = async (url, params) => {
  const { data: { items } } = await axios.get(url, { params })

  return items.map((data: TGenre) => ({ ...data, id: data._id }))
}
