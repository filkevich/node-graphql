import { getItems, getItemById } from '../../service'
import { TBands, TBand } from './bands'

const BANDS_URL = process.env.BANDS_URL || 'http://localhost:3002/v1/artists'

export const bands: TBands = (limit, offset) => getItems(BANDS_URL, { limit, offset })
export const band: TBand = ({id}) => getItemById(BANDS_URL, id)
