import RxCache from './RxCache'

export default class RxCacheAccess {
  static factories = new Map()

  static factoriesMap() {
    return RxCacheAccess.factories
  }

  static computeIfAbsent(id) {
    const factory = RxCacheAccess.factories.get(id)
    if (factory) {
      return factory
    }

    const cache = new RxCache(id)
    RxCacheAccess.factories.set(id, cache)
    return cache
  }
}
