const Banner = () => {
  return (
    <section id="home" className="w3l-banner py-5">
      <div className="banner-image"></div>
      <div className="banner-content">
        <div className="container pt-5 pb-md-4">
          <div className="row align-items-center py-4">
            <div className="col-md-6 pr-lg-5">
              <h3 className="mb-lg-4 mb-3 title">
                You will learn <span>Frontend</span>
              </h3>
              <p className="mr-5">
                There are two major things that a software enginner needs to
                learn. Frontend and Backend. From us you can learn the most
                popular technology React. We provide the best guidence.
              </p>
              <div className="mt-md-5 mt-4 mb-lg-0 mb-4">
                <a className="btn btn-style" href="/about">
                  Get Started
                </a>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-5 mb-lg-0 mb-5 right-banner-2 position-relative">
              <div className="sub-banner-image">
                <img
                  src="assets/images/banner-img.jpg"
                  className="img-fluid radius-image-full position-relative"
                  alt=" "
                />
              </div>
              <div className="banner-style-1 d-flex align-items-center">
                <i className="fas fa-chart-line green-clr-bg" />
                <h4>Guidence?</h4>
              </div>
              <div className="banner-style-1 banner-style-2 d-flex align-items-center">
                <i className="fas fa-shield-alt primary-clr-bg" />
                <h4>Contact with us</h4>
              </div>
              <div className="banner-style-1 banner-style-3 d-flex align-items-center">
                <i className="fas fa-chart-area blue-clr-bg" />
                <h4>Support ?</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
