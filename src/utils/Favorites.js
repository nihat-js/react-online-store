export function loadFavorites(favorites,setFavorites){
  try{
     let arr = JSON.parse( localStorage.favorites );
     setFavorites(arr)
  }catch(e){
    console.error('Error parsing favorites',e)
    setFavorites([])
  }
}


export function updateFavorites(favorites,setFavorites,{ type, payload }) {
  let arr = favorites //default
  switch (type) {
    case "ADD":
      arr = [...favorites, payload]
      break;
    case "REMOVE":
      arr = favorites.filter(f => f!== payload)
      break;
    case "CLEAR":
      arr = []
      break;
  }
  setFavorites(arr)
  localStorage.favorites = JSON.stringify(arr)
}
