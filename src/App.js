import { useState } from 'react';
import './App.scss';
import { useEffect } from 'react';
import Products from './components/Products';
import CreateProduct from './components/modal/CreateProduct';
import {loadFavorites , updateFavorites} from './utils/Favorites'
function App() {

  const [favorites, setFavorites] = useState([])
  const [products, setProducts] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)







  useEffect(() => {
    loadFavorites(favorites,setFavorites)
    loadProducts().then(
      loadLocalProducts()
      (response) => {
      setProducts(response)
    })
  }, [])


  return (
    <div className="main-container">
      <nav>

      </nav>
      <button onClick={() => setShowAddModal(true)} >  Add Product </button>
      <CreateProduct products={products} setProducts={setProducts} showModal={showAddModal} setShowModal={setShowAddModal} />



      <Products products={products} favorites={favorites} updateFavorites={updateFavorites.bind(null,favorites,setFavorites)} />
    </div>
  );
}

export default App;
