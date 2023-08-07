
export default class MyStorage {
  static load(name) {
    let arr = []
    try {
      if (localStorage.name) arr = JSON.parse(localStorage.name)
    } catch (err) {
      console.error(err, "ERROR : PARSING " + name + " PRODUCTS")
      localStorage.name = null
    }
    return arr
  }

  static add(name,obj) {
    let arr = MyStorage.load(name)
    localStorage.name = JSON.stringify([...arr,obj])
  }
  
  static delete(name,fn) {
    let arr = MyStorage.load(name)
    // localStorage.name = JSON.stringify(newArr)
  }

  static update(name,fn,obj){
    let arr = MyStorage.load(name)
  }  

}


// export function updateFavorites(favorites,setFavorites,{ type, payload }) {
//   let arr = favorites //default
//   switch (type) {
//     case "ADD":
//       arr = [...favorites, payload]
//       break;
//     case "REMOVE":
//       arr = favorites.filter(f => f!== payload)
//       break;
//     case "CLEAR":
//       arr = []
//       break;
//   }
//   setFavorites(arr)
//   localStorage.favorites = JSON.stringify(arr)
// }
