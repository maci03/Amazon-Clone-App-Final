import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

interface ProductType {
  id: string;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  stock: boolean;
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>(); // Specify the type of useParams
  const [product, setProduct] = useState<ProductType | null>(null); // Specify the type of product

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get<ProductType>(`/products/${productId}`); // Specify the type of the response
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductDetail();
  }, [productId]);

  if (!product) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Wrapper>
      <h2>{product.title}</h2>
      <Image src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>{product.stock ? "In Stock" : "Out of Stock"}</p>
    </Wrapper>
  );
};

export default ProductDetail;

const Wrapper = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Loading = styled.div`
  text-align: center;
  padding: 20px;
`;
