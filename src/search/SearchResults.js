import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ResultsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
`;

const ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 340px;
  width: 100%;
  margin: 10px;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 5px;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #007185;
  }

  .description__container {
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: #333;
  }

  .product__price {
    font-size: 1rem;
    color: #007185;

    strong {
      font-weight: bold;
    }

    span {
      margin-left: 10px;
      font-weight: bold;
      color: #c45500;
    }
  }

  button {
    width: 100%;
    padding: 7px 15px;
    border: 1px solid;
    background: #f0c14b;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    transition: 0.4s;
    margin-top: auto; 
    font-size: 1rem;

    :hover {
      background: #f4d078;
      background: -webkit-linear-gradient(top, #f7dfa5, #f0c14b);
      background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
    }
  }
`;

const SearchResults = ({ results }) => {
  return (
    <ResultsWrapper>
      <ResultsContainer>
        {results.length === 0 ? (
          <NoResultsMessage>No products found</NoResultsMessage>
        ) : (
          results.map((product) => (
            <ProductCard key={product.id}>
              <Link to={`/product/${product.id}`}>
                {product.image ? (
                  <img
                    src={`public/items/${product.image}`}
                    alt={product.title}
                  />
                ) : (
                  <PlaceholderImage>No Photo Available</PlaceholderImage>
                )}
              </Link>
              <div>
                <h3>{product.title}</h3>

                <p className="description__container">{product.description}</p>

                <p className="product__price">
                  <strong>$ {product.price}</strong>
                  <span className="pl-2 font-semibold">Save 5%</span>
                </p>
              </div>
              <button>add to basket</button>
            </ProductCard>
          ))
        )}
      </ResultsContainer>
    </ResultsWrapper>
  );
};

const NoResultsMessage = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: #333;
  margin-top: 50px;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
  color: #999;
`;

export default SearchResults;
