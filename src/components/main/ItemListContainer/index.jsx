import React from 'react'
import './style.css';
import ItemCount from '../ItemCount';

const index = ({precio, nombre, img}) => {



  return (
    <div className="card">                
        <img src={img} alt="" />
        <h3>{nombre}</h3>
        <p>precio: {precio}</p>
        <div>
           <ItemCount initial ={1} stock={10} />
        </div>
      
    </div>
  )
}

export default index