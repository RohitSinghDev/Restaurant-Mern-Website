import react from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import "./Home.css";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center">
                Welcome to The React Restaurant
              </h1>
              <p className="lead text-center mb-5 fs-4">
                One of the top most restaurants of the Country, has authenticate
                flavours and we always keep people coming back to our restaurant
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink
                  to="/contact"
                  className="btn btn-danger me-4 rounded-pill px-4 py-2 btnhome btnhome_red"
                >
                  Book Table
                </NavLink>
                <NavLink
                  to="/menu"
                  className="btn btn-outline-danger rounded-pill px-4 py-2 px-4 py-2 btnhome btnhome_red"
                >
                  our Services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
