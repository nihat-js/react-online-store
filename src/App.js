import { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import Products from './components/products/Products';
import CreateProduct from './components/modal/CreateProduct';
import { fetchProducts, } from './api/api'
import MyStorage from "./classes/MyStorage"
function App() {

  const [favorites, setFavorites] = useState([])
  const [products, setProducts] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)







  useEffect(() => {

    setFavorites(MyStorage.load("favorites"))
    fetchProducts().then(products => {
      setProducts([...MyStorage.load("products"), ...products])
    })
  }, [])


  return (
    <div className="main-container">
      <nav>

      </nav>
      <button onClick={() => setShowAddModal(true)} >  Add Product </button>
      <CreateProduct products={products} setProducts={setProducts} showModal={showAddModal} setShowModal={setShowAddModal} />



      <Products products={products} favorites={favorites} setFavorites={setFavorites} />
    </div>
  );
}

export default App;
