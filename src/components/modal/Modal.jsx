import React from 'react'
import { useEffect,useState } from 'react'
import './Modal.scss'
import PropTypes from 'prop-types';



export default function Modal({ className ,show, setShow,  showCloseButton  , children }) {


  useEffect(() => {
    let clickListener = window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        setShow(false)
      }
    })
    let keyListener = window.addEventListener('keyup',(e) =>{
      if (e.key == "Escape") {
        setShow(false)
      }
    })

    return  () => {
     window.removeEventListener('click',clickListener)
     window.removeEventListener('keyup',keyListener)
    }  
  }, [])

  return (
    <div className={`modal ${className}`}  style={{display :  show ? "flex" : "none"}} >
      <div className="container">
        {showCloseButton && <button className='btn-close' onClick={() => { setShow(false)  }}> &times; </button>}
        { children }

        
      </div>
    </div>
  )
}

Modal.propTypes = {
  className : PropTypes.string,
  show : PropTypes.bool.isRequired,
  setShow : PropTypes.func.isRequired,
  showCloseButton  : PropTypes.bool,
  children : PropTypes.node
}


Modal.defaultProps = {
  showCloseButton : false
}