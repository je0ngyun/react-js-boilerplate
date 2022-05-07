const Deffered = (() => {
  let resolve, reject
  return class Deffered extends Promise {
    constructor(
      executor = (_resolve, _reject) => {
        resolve = _resolve
        reject = _reject
      }
    ) {
      super(executor)
      this.resolve = resolve
      this.reject = reject
    }
  }
})()

export default Deffered
