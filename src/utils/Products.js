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




export function loadLocalProducts() {
  try {
    if (localStorage.products) {
      return JSON.parse(localStorage.products);
    }
    return []
  } catch (e) {
    console.error('Error parsing local products', e)
    return []
  }

}
export function saveToLocalProducts(product) {
  try {
    let arr = localStorage.products ? localStorage.products : []
    let products = JSON.parse(localStorage.products)
    localStorage.products = JSON.stringify([...products, product])
  } catch (e) {
    console.log('Error parsing local products')
    localStorage.products = null
  }
}