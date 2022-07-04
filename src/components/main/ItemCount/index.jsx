import React, { useState } from "react";
import "./index.css";

export const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);

  const decrease = () => {
    setCount(count - 1);
  };
  const crease = () => {
    setCount(count + 1);
  };

  return (
    <div className="btn-products">
      <div >
        <div className="contador">
            <button disabled={count <= 1} onClick={decrease}>
              -
            </button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={crease}>
              +
            </button>
        </div>
        <div className="comprar">
          <button className="btn-card"> Comprar</button>
      </div>
      </div>
     
    </div>
  );
};

export default ItemCount;
