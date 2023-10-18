import React from 'react';
import "./index.css"

const ProductTable = () => {
  // Define an array of products with product name, stock price, and total sales.
  const products = [
    { productName: 'Product A', stockPrice: '$20', totalSales: 100 },
    { productName: 'Product B', stockPrice: '$25', totalSales: 150 },
    { productName: 'Product C', stockPrice: '$18', totalSales: 80 },
  ];

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Stock Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.stockPrice}</td>
              <td>{product.totalSales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
