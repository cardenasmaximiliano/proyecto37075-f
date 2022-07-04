import React from 'react'
import './style.css';
import ItemListCount from '../ItemListCount';

const index = ({precio, nombre, img}) => {



  return (
    <div className="card">                
        <img src={img} alt="" />
        <h3>{nombre}</h3>
        <p>precio: {precio}</p>
        <div>
           <ItemListCount initial ={1} stock={10} />
        </div>
            <p className="botton-card"><a href=" #">Comprar</a></p>
    </div>
  )
}

export default index