import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 8px;
  background-color: #f5bc2c;
  color: #040a57;
  line-height: 1.5;

  ul{
      list-style: none;
      padding-left: 0;
    }
  a{
    text-decoration: none;
    color: #040a57;
  }
  a:hover {
    text-decoration: underline;
  }
  .ft-title {
    color: #fff;
    font-family: "Merriweather", serif;
    font-size: 1.375rem;
    padding-bottom: 0.625rem;
  }
  /* Sticks footer to bottom */
  body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  .container {
    flex: 1;
  }
  /* Footer main */
  .ft-main {
    padding: 1.25rem 1.875rem;
    display: flex;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 29.8125rem /* 477px */) {
    .ft-main {
      justify-content: space-evenly;
    }
  }
  @media only screen and (min-width: 77.5rem /* 1240px */) {
    .ft-main {
      justify-content: space-evenly;
    }
  }
  .ft-main-item {
    padding: 1.25rem;
    min-width: 12.5rem;
  }

  /* Footer main | Newsletter form */
  form {
    display: flex;
    flex-wrap: wrap;
  }
  input[type="email"] {
    border: 0;
    padding: 0.625rem;
    margin-top: 0.3125rem;
  }
  input[type="submit"] {
    background-color: #00d188;
    color: #fff;
    cursor: pointer;
    border: 0;
    padding: 0.625rem 0.9375rem;
    margin-top: 0.3125rem;
  }
  /* Footer social */
  .ft-social {
    padding: 0 1.875rem 1.25rem;
  }
  .ft-social-list {
    display: flex;
    justify-content: center;
    border-top: 1px #777 solid;
    padding-top: 1.25rem;
  }
  .ft-social-list li {
    margin: 0.5rem;
    font-size: 1.25rem;
  }
  /* Footer legal */
  .ft-legal {
    padding: 0.9375rem 1.875rem;
    background-color: #333;
  }
  .ft-legal-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .ft-legal-list li {
    margin: 0.125rem 0.625rem;
    white-space: nowrap;
  }
  /* one before the last child */
  .ft-legal-list li:nth-last-child(2) {
      flex: 1;
  }

}
`;


export default class FooterNav extends React.Component {
    render() {
        return (
          <FooterContainer>
            {/* //footer main */}
            <section className="ft-main">
              <div className="ft-main-item">
                <h2 className="ft-title">About</h2>
                <ul>
                  <li><a href="#ourstory">Our Story</a></li>
                  <li><a href="#sellerinfo">Seller Shop Set up</a></li>
                  <li><a href="#careers">Careers</a></li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Contact</h2>
                <ul>
                  <li><a href="#">Seller Shop Rules</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
              <div className="ft-main-item">
                <h2 className="ft-title">Stay Updated</h2>
                <p> Suscribe to our newsletter to get our latest news.</p>
                <form>
                  <input type="email" name="email" placeholder="Enter email address"></input>
                  <input type="submit" value="Subscribe"></input>
                </form>
              </div>
              </section>
              {/* --footer social --  */}
              <section className="ft-social">
                <ul className="ft-social-list">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="#"><i className="fa fa-github"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                </ul>
              </section>
              {/* --footer legal--- */}
              <section className="ft-legal">
                <ul className="ft-legal-list">
                  <li><a href="#">Terms &amp; Conditions </a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li>&copy; 2021 Your Local Art-is-in Inc</li>
                </ul>
              </section>
          </FooterContainer>
           
        )
    } 
}
