import React from "react";
import { Link } from "react-router-dom";

class NewDesign extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cup_size: "",
        cup_color: "",
        cup_text: ""
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }
  
    stripHtmlEntities(str) {
      return String(str)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  
    onChange(event) {
      this.setState({ [event.target.cup_size]: event.target.value });
    }
  
    onSubmit(event) {
      event.preventDefault();
      const url = "/api/v1/designs/create";
      const { cup_size, cup_color, cup_text } = this.state;
  
      if (cup_size.length == 0 || cup_color.length == 0 || cup_text.length == 0)
        return;
  
      const body = {
        cup_size,
        cup_color,
        cup_text: cup_text.replace(/\n/g, "<br> <br>")
      };
  
      const token = document.querySelector('meta[cup_size="csrf-token"]').content;
      fetch(url, {
        method: "POST",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.props.history.push(`/design/${response.id}`))
        .catch(error => console.log(error.message));
    }
  
    render() {
      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <h1 className="font-weight-normal mb-5">
                Request a design
                fill out form below and we will get back within the hour! 
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="designCupSize">Cup size</label>
                  <select name="cup size" id="cup size">
                    <option value="6 oz">6 oz</option>
                    <option value="8 oz">8 oz</option>
                    <option value="12 oz">12 oz</option>
                    <option value="16 oz">16 oz</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="designCupColor">email</label>
                  <input
                    type="text"
                    name="ingredients"
                    id="designIngredients"
                    className="form-control"
                    required
                    onChange={this.onChange}
                  />
                  <small id="ingredientsHelp" className="form-text text-muted">
                    We will email after review. Takes about 1-day turnaround. 
                  </small>
                </div>
                <label htmlFor="Instructions">The design: Will hopefully have other things</label>
                <textarea
                  className="form-control"
                  id="instruction"
                  name="instruction"
                  rows="5"
                  required
                  onChange={this.onChange}
                />
                <button type="submit" className="btn custom-button mt-3">
                  Create Design 
                </button>
                <Link to="/designs" className="btn btn-link mt-3">
                  Back to All Designs 
                </Link>
              </form>
            </div>
          </div>
        </div>
      );
    }
  
  }
  
  export default NewDesign;