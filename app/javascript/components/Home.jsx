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
  height: 100vh;
  overflow-y: auto;
  display: flex;
  background-color: #808080
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-auto-rows: 200px;
 `;


export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('didMount');
    function resizeGridItem(item) {
      let grid = document.getElementsByClassName("grid")[0];
      let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
      let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
      let rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = "span "+rowSpan;
    }
    
    function resizeAllGridItems() {
      let allItems = document.getElementsByClassName("item");
      for(let x=0; x < allItems.length; x++){
         resizeGridItem(allItems[x]);
      }
    }
    
    // function resizeInstance(instance) {
    //   let item = instance.elements[0];
    //   resizeGridItem(item);
    // }

    resizeAllGridItems();
    window.addEventListener("resize", resizeAllGridItems);
    // let allItems = document.getElementsByClassName("item");
    // for(let x=0;x<allItems.length;x++){
      // imagesLoaded( allItems[x], resizeInstance);
    // }
  }

  render() {
    return (
      <ResultsContainer>
        <ResultsGrid className='grid'>
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
  <ProductContainer className='item'>
    <div className='content'>
      {product.name}{product.vendor}
    </div>
  </ProductContainer>
);