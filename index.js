export default
class History {
  constructor() {
    this.listeners = []
  }
  push(path) {
    for(listener of this.listeners)
      listener(path)
    history.pushState({}, '', path)
  }
  listen(listener) {
    this.listeners.push(listener)
  }
}
