import Axios, { AxiosResponse } from 'axios'

import api from './api'

class Fetcher {
  private readonly apiKey: string
  constructor (apiKey: string) {
    this.apiKey = apiKey
  }

  public async get (urlToken: string): Promise<AxiosResponse<any>> {
    this.checkUrlToken(urlToken)
    return await Axios.get(api[urlToken] as string)
  }

  public async post (urlToken: string): Promise<AxiosResponse<any>> {
    this.checkUrlToken(urlToken)
    return await Axios.get(api[urlToken] as string)
  }

  private checkUrlToken (urlToken: string): void {
    if (urlToken == null || api[urlToken] == null) {
      throw new Error(`cannot find url ${urlToken}`)
    }
  }
}
export default Fetcher
