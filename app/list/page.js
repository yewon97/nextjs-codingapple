import Image from 'next/image';

export default function ListPage() {
  let product = ['tomatoes', 'pasta', 'coconut'];
  return (
    <div>
      <h2 className="title">Products</h2>
      {product.map((food, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} alt={food} className="food-img" />
            <h4>{food} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
