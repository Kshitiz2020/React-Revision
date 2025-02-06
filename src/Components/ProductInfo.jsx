function ProductInfo() {
  const products = [
    {
      name: " laptop",
      price: 1000,
      availability: true,
    },
    {
      name: "mobile",
      price: 500,
      availability: false,
    },
    {
      name: "tablet",
      price: 300,
      availability: true,
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <ul key={product.name}>
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default ProductInfo;
