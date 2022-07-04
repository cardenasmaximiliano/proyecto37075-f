import React from 'react'
import cartwidget from './cardwidget.svg';
import './style.css';

const index = () => {
  return (
    <div className="d-flex align-items-center">
                <a href="#">
                <img src={ cartwidget} alt="" />
                </a>

                <p className='btn-header'>Iniciar sesión</p>    
            </div> 
  )
}

export default index