import React from 'react'
import "./Product.scss"
import star from "../../assets/star.svg"
import starFilled from "../../assets/star-filled.svg"
import MyStorage from '../../classes/MyStorage'
import PropTypes from 'prop-types'; 
export default function Product({ favorites, setFavorites, data: { id, name, price, imagePath, sku, color } }) {

  let isFav = favorites.indexOf(id) > -1
  function handleStarClick() {
    let arr = isFav ? MyStorage.remove("favorites", (el) => el !== id) : MyStorage.add("favorites", id)
    setFavorites(arr)
  }

  return (
    <div className="card">
      <header>
        <img className='product-img' src={imagePath} alt="Product image" />
        <img className='star' src={isFav ? starFilled : star} alt="" onClick={handleStarClick} />
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


Product.propTypes = {
  favorites : PropTypes.array.isRequired,
  setFavorites : PropTypes.func.isRequired,
  data : PropTypes.object.isRequired,
}