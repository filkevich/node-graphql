import axios from 'axios'

type TGetParams = {
  limit: number | undefined,
  offset: number | undefined
}

type TGetItems = (url: string, params?: TGetParams) => Promise<any>

type TGetItemByID = (url: string, id: string) => Promise<any>

type TGenre = {
  _id: string,
  name: string,
  description: string,
  country: string,
  year: number,
}

export const getItems: TGetItems = async (url, params) => {
  const { data: { items } } = await axios.get(url, { params })

  return items.map((data: TGenre) => ({ ...data, id: data._id }))
}

export const getItemById: TGetItemByID = async (url, id) => {
  const composedUrl = url + '/' + id
  const { data } = await axios.get(composedUrl)

  return { ...data, id: data._id }
}