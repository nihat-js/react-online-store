export function fetchProducts() {
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




