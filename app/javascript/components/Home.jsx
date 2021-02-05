import { each } from "jquery";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

let createProduct = i => ({
  name: `Product ${i + 1}`,
  price: 100 * Math.random(),
  vendor: 'Doug',
  image: null,
  description: ''
});
const productArray= []
for (let i = 0; i < 30; i++) {
  productArray.push(createProduct(i));
}

const ResultsContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-auto-rows: 200px;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  margin: 0 60px;
 `;


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ResultsContainer>
        <ResultsGrid>
          {productArray.map(renderProduct)}
        </ResultsGrid>
      </ResultsContainer>
    );
  }
}
const ProductContainer = styled.div`
  border: 1px solid;
  width: 100%;
`

const renderProduct = product => (
  <ProductContainer>
    <div>
      {product.name}{product.vendor}
    </div>
  </ProductContainer>
);