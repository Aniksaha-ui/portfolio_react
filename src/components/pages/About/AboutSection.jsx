import React from "react";

const AboutSection = () => {
  return (
    <section className="w3l-servicesblock py-5">
      <div className="container py-lg-5 py-4">
        <div className="row pt-xl-5 pt-lg-0 pt-5 pb-xl-4 align-items-center">
          <div className="col-lg-6 position-relative home-block-3-left">
            <div className="position-relative">
              <img
                src="assets/images/home2.jpg"
                alt
                className="img-fluid radius-image"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5">
            <h3 className="title-style">
              Welcome to World Best Business Company
            </h3>
            <p className="mt-lg-4 mt-3 mb-sm-5 mb-4">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel.{" "}
            </p>
            <div className="two-grids mt-md-0 mt-md-5 mt-4">
              <div className="grids_info">
                <i className="fas fa-user-clock primary-clr-bg" />
                <div className="detail">
                  <h4>Our Mission</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui.
                  </p>
                </div>
              </div>
              <div className="grids_info mt-sm-5 mt-4">
                <i className="fas fa-laptop-house green-clr-bg" />
                <div className="detail">
                  <h4>Our Vision</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui.
                  </p>
                </div>
              </div>
              <div className="grids_info mt-sm-5 mt-4">
                <i className="fas fa-laptop-house blue-clr-bg" />
                <div className="detail">
                  <h4>Our Values</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutSection;