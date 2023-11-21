export default function ListPage() {
  let product = ['tomatoes', 'pasta', 'coconut'];
  return (
    <div>
      <h2 className="title">Products</h2>
      {product.map((food, idx) => {
        return (
          <div className="food" key={idx}>
            <h4>{food} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
