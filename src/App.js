import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {

  const [favorites,setFavorites] = useState([])
  const [products,setProducts] = useState([])




  function loadProducts() {
    return new Promise((resolve,reject)=>{
      fetch("./products.json")
      .then((response)=> {
        if (response.ok){
          resolve(response.json())
        }else{
          reject (response)
        }
      })
    })

  }

  useEffect(  ()=>{
    loadProducts().then((response)=>{
      console.log({response});
      setProducts(response)
    })
  },[ ])


  return (
    <div className="App">

    </div>
  );
}

export default App;
