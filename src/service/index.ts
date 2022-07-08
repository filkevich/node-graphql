import axios from 'axios'
import { TGenreObj } from '../modules/genres/genres'
import { TGetItems, TGetItemByID } from './service'

export const getItems: TGetItems = async (url, params) => {
  const { data: { items } } = await axios.get(url, { params })

  return items.map((item: TGenreObj) => ({ ...item, id: item._id }))
}

export const getItemById: TGetItemByID = async (url, id) => {
  const composedUrl = url + '/' + id
  const { data: item } = await axios.get(composedUrl)

  return { ...item, id: item._id }
}
