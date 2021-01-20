import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  padding: 8px;
  text-align: center;
  color: #f5bc2c;
`;

const NavLinks = styled.div`
  font-family: Fakt-Light,Helvetica,sans-serif;
  margin-bottom: .5rem;
  letter-spacing: .25px;

  a {
    margin: 5px;
  }
`;

const SearchBar = styled.div`
  i {
    position: relative;
    right: 16px;
    margin: -8px
  }
`;

const ShoppingBag= styled.div`
  a {
    position: absolute; 
    top: 4px;
    right: 4px;
  }
`;

const Categories= styled.div`
  a{

  }
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <NavContainer>
        <h1>Front</h1>
        <NavLinks>
          <a href="#home" className="active">Home</a>
          <a href="#blog">Blog</a>
          <a href="#signIn">Sign In</a>
        </NavLinks>
        <ShoppingBag>
          <a href="#shoppingbag" className="fa fa-shopping-bag" aria-hidden="true"></a>
        </ShoppingBag>
        <SearchBar>
          <input type="text" placeholder="Search.."></input>
          <i className="fa fa-search"></i>
        </SearchBar>
      </NavContainer>
    )
  }
}