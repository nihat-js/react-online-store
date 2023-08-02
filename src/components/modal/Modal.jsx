import React from 'react'
import { useEffect,useState } from 'react'
import './Modal.scss'


export default function Modal({ className ,show, setShow,  showCloseButton = true , children }) {


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


