// for working with arrays in localStorage
export default class MyStorage {
  static load(name) {
    let arr = []
    try {
      if (localStorage[name]) arr = JSON.parse(localStorage[name])
    } catch (err) {
      console.error(err, "ERROR : PARSING " + name + " PRODUCTS")
      localStorage.removeItem(name)
    }
    return arr
  }

  static add(name, payload) {
    let newArr = [payload, ...MyStorage.load(name),]
    localStorage[name] = JSON.stringify(newArr)
    return newArr
  }

  static remove(name, fn) {
    let newArr = MyStorage.load(name).filter(fn)
    localStorage[name] = JSON.stringify(newArr)
    return newArr
  }

  static update(name, fn, obj) {
    let arr = MyStorage.load(name)
  }

}

