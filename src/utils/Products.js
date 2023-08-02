export function loadProducts() {
  return new Promise((resolve, reject) => {
    fetch("./products.json")
      .then((response) => {
        if (response.ok) {
          resolve(response.json())
        } else {
          reject(response)
        }
      })
  })

}

export function loadLocalProducts(){
    try{
       let arr = JSON.parse( localStorage.favorites );
       return arr
    }catch(e){
      console.error('Error parsing local products',e)
      setFavorites([])
    }
    
}