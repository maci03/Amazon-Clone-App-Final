
import React, { useState, ChangeEvent } from "react";
import { ProductType } from "../types";

interface ProductSearchProps {
  products: ProductType[];
}

const ProductSearch: React.FC<ProductSearchProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] =
    useState<ProductType[]>(products);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
