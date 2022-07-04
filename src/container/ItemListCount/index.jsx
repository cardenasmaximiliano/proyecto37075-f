import React,{useState} from 'react';

export const ItemListCount = ({initial, stock}) => {
    

    const[count, setCount]= useState(initial);

    const decrease=() =>{
        setCount(count - 1)
    }
    const crease=() =>{
        setCount(count + 1)
    }


  return (
    <div>
    <button diseable={count <=1} onClick={decrease}>-</button>
    <span>{count}</span>
    <button diseable={count >=stock} onClick={crease}>+</button>
    <div>
        <button>agregar al carrito</button>
    </div>
</div>
  )
}

export default ItemListCount