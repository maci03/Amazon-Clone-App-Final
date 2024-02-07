import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchResults = ({ results }) => {
    
  return (
    <ResultsContainer>
      {results.map((product) => (
        <ProductCard key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={`public/items/${product.image}`} alt={product.title} />
          </Link>
          <div>
            <h3>{product.title}</h3>

            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        </ProductCard>
      ))}
    </ResultsContainer>
  );
};

export default SearchResults;




const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  width: 200px;
  text-align: center;

  img {
    width: 100%;
    max-height: 150px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;
