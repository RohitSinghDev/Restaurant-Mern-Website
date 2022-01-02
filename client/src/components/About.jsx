import react from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section id="about">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/assets/image1.webp"
                alt="About"
                className="w-75 mt-5"
              />
            </div>
            <div className="col-md-6">
              <h3 className="fs-5 mb-0">About us</h3>
              <h1 className="display-6 mb-2">
                <b> Multi-Cuisine</b> Restaurant
              </h1>
              <hr className="w-50" />
              <p className="lead mb-4">
                Has various types of food and dishes ranging from chineese to
                italian and from Indian to Thai
              </p>
              <NavLink
                to="/contact"
                className="btn btn-danger me-4 rounded-pill px-4 py-2 btnhome btnhome_red"
              >
                Book Table
              </NavLink>
              <NavLink
                to="/menu"
                className="btn btn-danger me-4 rounded-pill px-4 py-2 btnhome btnhome_red"
              >
                Menu
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
