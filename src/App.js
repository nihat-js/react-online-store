import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Products from './components/Products';
import CreateProduct from './components/modal/CreateProduct';

function App() {

  const [favorites,setFavorites] = useState([])
  const [products,setProducts] = useState([])
  const [showAddModal,setShowAddModal] = useState(false)



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
      <nav>

      </nav>
      <button onClick={() => setShowAddModal(true) } >  Add Product </button>
      <CreateProduct products={products} setProducts={setProducts}  showModal={showAddModal} setShowModal={setShowAddModal} />



      <Products products={products} favorites={favorites} />
    </div>
  );
}

export default App;
