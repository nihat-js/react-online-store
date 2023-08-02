import React from 'react'
import "./Product.scss"
import star from "../assets/star.svg"
import starFilled from "../assets/star-filled.svg"
export default function Product({  favorites,updateFavorites ,data: { id,name, price, imagePath, sku, color } }) {

  let isFav =  favorites.indexOf(id) > -1  
  function  handleStarClick(){
    const type = isFav ? "REMOVE" : "ADD" 
    updateFavorites({type ,payload : id}) 
  }

  return (
    <div className="card">
      <header>
        <img  className='product-img' src={imagePath} alt="Product image" />
        <img className='star' src={isFav ? starFilled : star} alt=""  onClick={handleStarClick}/>
      </header>
      <div className="body">
        <h2> Name {name}</h2>
        <p>Price: ${price} </p>
        <p>Color: {color}</p>
        <p>SKU code: 123456</p>
      </div>
    </div>
  )

}
