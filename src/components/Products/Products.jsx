import React from 'react'
import Product from '../Product/Product'
import "./Products.css"
export default function Products({products,favorites,  setFavorites}) {
  return (
    <div className='products-component'> 
      {products.map((el,i)=>  <Product  key={i}  data={el}  favorites={favorites} updateFavorites={updateFavorites}  />  )}
    </div>
  )
}
