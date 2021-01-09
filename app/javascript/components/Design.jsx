import React from "react";
import { Link } from "react-router-dom";

class Design extends React.Component {
  constructor(props) {
    super(props);
    this.state = { design: { ingredients: "" } };

    this.addHtmlEntities = this.addHtmlEntities.bind(this);
    this.deleteDesign = this.deleteDesign.bind(this);
  }

  addHtmlEntities(str) {
    return String(str)
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">");
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/show/${id}`;
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ design: response }))
      .catch(() => this.props.history.push("/design"));
  }

  deleteDesign() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    const url = `/api/v1/destroy/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => this.props.history.push("/designs"))
      .catch(error => console.log(error.message));
  }

  render() {
    const { design } = this.state;
    let ingredientList = "No ingredients available";
    if (design.ingredients.length > 0) {
      ingredientList = design.ingredients
        .split(",")
        .map((ingredient, index) => (
          <li key={index} className="list-group-item">
            {ingredient}
          </li>
        ));
    }

    const designInstruction = this.addHtmlEntities(design.instruction);

    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={design.image}
            alt={`${design.name} image`}
            className="img-fluid position-absolute"
          />
          <div className="overlay bg-dark position-absolute" />
          <h1 className="display-4 position-relative text-white">
            {design.name}
          </h1>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-3">
              <ul className="list-group">
                <h5 className="mb-2">Ingredients</h5>
                {ingredientList}
              </ul>
            </div>
            <div className="col-sm-12 col-lg-7">
              <h5 className="mb-2">Preparation Instructions</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${designInstruction}`
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-2">
              <button type="button" className="btn btn-danger" onClick={this.deleteDesign}>
                Delete Design
              </button>
            </div>
          </div>
          <Link to="/designs" className="btn btn-link">
            Back to Designs 
          </Link>
        </div>
      </div>
    );
  }
}

export default Design;