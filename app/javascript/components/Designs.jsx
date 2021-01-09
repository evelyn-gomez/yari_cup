import React from "react";
import { Link } from "react-router-dom";

class Designs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        designs: []
      };
    }
    componentDidMount() {
        const url = "/api/v1/designs/index";
        fetch(url)
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok.");
          })
          .then(response => this.setState({ designs: response }))
          .catch(() => this.props.history.push("/"));
    }
    render() {
        const { designs } = this.state;
        const allDesigns = designs.map((design, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card mb-4">
              <img
                src={design.image} //image can stay the same//
                className="card-img-top"
                alt={`${design.name} image`}
              />
              <div className="card-body">
                <h5 className="card-title">{design.name}</h5>
                <Link to={`/designs/${design.id}`} className="btn custom-button">
                  View Designs
                </Link>
              </div>
            </div>!
          </div>
        ));
        const noDesign = (
          <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
            <h4>
              No designs yet. Why not <Link to="/new_design">create one</Link>
            </h4>
          </div>
        );
    
        return (
          <>
            <section className="jumbotron jumbotron-fluid text-center">
              <div className="container py-5">
                <h1 className="display-5">Designs for every occasion</h1>
                <p className="lead text-muted">
                  We’ve pulled together our most popular desings , our latest
                  additions, and our editor’s picks, so there’s sure to be something
                  perfect for everyone. 
                </p>
              </div>
            </section>
            <div className="py-5">
              <main className="container">
                <div className="text-right mb-3">
                  <Link to="/design" className="btn custom-button">
                    Create New Design 
                  </Link>
                </div>
                <div className="row">
                  {designs.length > 0 ? allDesigns : noDesign}
                </div>
                <Link to="/" className="btn btn-link">
                  Home
                </Link>
              </main>
            </div>
          </>
        );
      }
  }
  export default Designs;