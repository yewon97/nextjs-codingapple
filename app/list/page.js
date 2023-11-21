'use client';
import { useState } from 'react';

export default function ListPage() {
  let product = ['tomatoes', 'pasta', 'coconut'];
  const [count, setCount] = useState([0, 0, 0]);

  const handleCount = (idx) => () => {
    setCount((prev) => {
      let copy = [...prev];
      copy[idx] += 1;
      return copy;
    });
  };

  return (
    <div>
      <h2 className="title">Products</h2>
      {product.map((food, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} alt={food} className="food-img" />
            <h4>{food} $40</h4>
            <span>{count[i]}</span>
            <button onClick={handleCount(i)}>+</button>
          </div>
        );
      })}
    </div>
  );
}
