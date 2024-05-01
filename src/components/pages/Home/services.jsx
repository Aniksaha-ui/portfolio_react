const Services = ({ services }) => {
  return (
    <section className="about-section py-5">
      <div className="container py-lg-5 py-4">
        <div
          className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4"
          style={{ maxWidth: 600 }}
        >
          <h3 className="title-style mb-2">
            We Provides Shortage Remarkable Ideas!
          </h3>
          <p>
            Ut aut reiciendis voluptatibus maiores alias consequatur aut
            perferendis doloribus asperiores repellat.
          </p>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-4 col-md-6">
            <div className="about-single p-3">
              <div className="about-icon mb-4">
                <i className="fas fa-business-time primary-clr-bg" />
              </div>
              <div className="about-content">
                <h5 className="mb-2">
                  <a href="about.html">Development</a>
                </h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit accusa
                  ntium dolor emque laudan sit accusa.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-0 mt-3">
            <div className="about-single p-3">
              <div className="about-icon mb-4">
                <i className="fas fa-chart-pie green-clr-bg" />
              </div>
              <div className="about-content">
                <h5 className="mb-2">
                  <a href="about.html">Integration</a>
                </h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit accusa
                  ntium dolor emque laudan sit accusa.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-lg-0 mt-2">
            <div className="about-single p-3">
              <div className="about-icon mb-4">
                <i className="fas fa-shipping-fast blue-clr-bg" />
              </div>
              <div className="about-content">
                <h5 className="mb-2">
                  <a href="about.html">Branding</a>
                </h5>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit accusa
                  ntium dolor emque laudan sit accusa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
