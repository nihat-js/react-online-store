import React from 'react'
import Product from '../product/Product'
import "./Products.css"
import PropTypes from 'prop-types'; // ES6


export default function Products({products,favorites,  setFavorites}) {
  return (
    <div className='products-component'> 
      {products.map((el,i)=>  <Product  key={i}  data={el}  favorites={favorites}   setFavorites={setFavorites} />  )}
    </div>
  )
}

Products.prototypes = {
  products :  PropTypes.array.isRequired,
  favorites : PropTypes.array.isRequired,
  setFavorites : PropTypes.func.isRequired,
}
