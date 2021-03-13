import { Coin, Notifier } from '../types'

import { HOUR_MIN } from './../utils/constants'
import TgNotifier from '../notifier/tgNotifier'

abstract class CoinBase implements Coin {
  private readonly name: string
  private readonly prices: number[] = []
  private readonly maxSize: number
  private readonly notifiers: Notifier[]
  constructor (name: string) {
    this.name = name
    this.maxSize = 5000
    this.notifiers = [new TgNotifier()]
  }

  public notify (): void {
    if (this.notifiers.length < 1) return
    for (let i = 0; i < this.notifiers.length; ++i) {
      this.notifiers[i]?.notify()
    }
  }

  public addPrice (price: number): void {
    this.prices.push(price)
    this.checkPrice()
    if (this.priceSize() > this.maxSize) {
      this.prices.splice(0, this.maxSize / 2)
    }
  }

  public getName (): string {
    return this.name
  }

  public getCurrentPrice (): number {
    return this.getPrice(this.priceSize() - 1)
  }

  private checkPrice (): void {
    const hourDiff = this.priceDiff(HOUR_MIN)
    console.log(hourDiff)
  }

  private priceDiff (diff: number): number {
    const index = this.priceSize() - diff
    if (index < 1) return -1
    return this.getCurrentPrice() - this.getPrice(index)
  }

  private getPrice (index: number): number {
    if (this.priceSize() < 1) return -1
    return this.prices[index] as number
  }

  private priceSize (): number {
    return this.prices.length
  }
}

export default CoinBase
