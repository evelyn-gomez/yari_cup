import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #f5bc2c;
  padding: 8px;
  text-align: center;
  h1 {
    color: #ffffff;
  }
`;

const NavLinks = styled.div`
  font-family: Fakt-Light,Helvetica,sans-serif;
  margin-bottom: .5rem;
  letter-spacing: .25px;

  a {
    margin: 8px;
  }
`;

const SearchBar = styled.div`
  i {
    position: relative;
    right: 16px;
    margin: -8px
  }
`;

const TopRightCornerElements= styled.div`
  position: absolute;
  right: 8px;
  line-height: 0;
  font-size: x-large;
  
  a { 
    margin-left: 8px;
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
        <TopRightCornerElements>
          <a href="#bookmarks" className="fa fa-bookmark"></a>
          <a href="#shoppingbag" className="fa fa-shopping-bag"></a>
        </TopRightCornerElements>
        <h1>Front</h1>
        <NavLinks>
          <a href="#home" className="active">Home</a>
          <a href="#blog">Blog</a>
          <a href="#signIn">Sign In</a>
        </NavLinks>
        <SearchBar>
          <input type="text" placeholder="Search.."></input>
          <i className="fa fa-search"></i>
        </SearchBar>
      </NavContainer>
    )
  }
}