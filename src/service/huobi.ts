import { AxiosResponse } from 'axios'
import Fetcher from './fetcher'

const fetcher = new Fetcher('123')

export async function getRecentPrice (): Promise<AxiosResponse<any>> {
  return await fetcher.get('GET_RECENT_PRICE')
}
