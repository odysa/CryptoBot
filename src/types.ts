export interface Dictionary<T> {
  [key: string]: T
}
export interface Coin {
  addPrice: (price: number) => void
  notify: () => void
  getCurrentPrice: () => number
}
export interface Notifier {
  notify: () => void
}
