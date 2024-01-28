import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const SearchResults = () => {
    return(
        <ResultContainer>
            {results.map((product) => (
                <ProductCard key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        <img src={`/src/data/Data.ts/${product.image}`}alt={product.title} />
                    </Link>
                </ProductCard>
            ))}
        </ResultContainer>
    )
}
export default SearchResults