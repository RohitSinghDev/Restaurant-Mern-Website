import react from "react";
// import "./Home.css";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Menu</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Delicious </b>Menu
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3 bg1">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">chicken biryani</h5>
                  <p class="card-text lead">Tender Boneless chicken</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 bg2">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">Noodles</h5>
                  <p class="card-text lead">Chineese seasoned noodles</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 bg3">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">Veg Fried Rice</h5>
                  <p class="card-text lead">Seasoned with herbs and veggies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div class="card p-3 bg4">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">
                    Paneer Tikka Masala
                  </h5>
                  <p class="card-text lead">Made with butter and flavours</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 bg5">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">Gulab Jamun</h5>
                  <p class="card-text lead">Sweet and tasty</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3 bg6">
                <div class="card-body text-center">
                  <h5 class="card-title mb-3 fs-4 fw-bold">Garlic Bread</h5>
                  <p class="card-text lead">tosses with cheese and butter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
