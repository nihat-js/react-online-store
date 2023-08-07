import { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import Products from './components/Products/Products';
import CreateProduct from './components/modal/CreateProduct';
import { loadFavorites, updateFavorites } from './utils/Favorites'
import { loadProducts, loadLocalProducts } from './utils/Products'
import MyStorage from "./classes/MyStorage"
function App() {

  const [favorites, setFavorites] = useState([])
  const [products, setProducts] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)







  useEffect(() => {
    
    setFavorites(MyStorage.load(favorites))
    let localProducts = loadLocalProducts()
    loadProducts().then(products => {
      setProducts([...localProducts, ...products])
    })
  }, [])


  return (
    <div className="main-container">
      <nav>

      </nav>
      <button onClick={() => setShowAddModal(true)} >  Add Product </button>
      <CreateProduct products={products} setProducts={setProducts} showModal={showAddModal} setShowModal={setShowAddModal} />



      <Products products={products} favorites={favorites}   setFavorites={setFavorites}  />
    </div>
  );
}

export default App;
