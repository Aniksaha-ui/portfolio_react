const WhyChooseUs = ({ serviceSection }) => {
  return (
    <section className="w3l-servicesblock py-5">
      <div className="container pb-lg-5">
        <div className="row pb-xl-5 align-items-center">
          <div className="col-lg-6 position-relative home-block-3-left pb-lg-0 pb-5">
            <div className="position-relative">
              <img
                src="assets/images/home1.jpg"
                alt
                className="img-fluid radius-image"
              />
            </div>
            <div className="imginfo__box">
              <h6 className="imginfo__title">Get a Price Quote Today!</h6>
              <p>
                Nemo enim ipsam oluptatem quia oluptas
                <br /> sit aspernatur aut odit aut fugit.{" "}
              </p>
              <a href="tel:http://1(800)7654321">
                <span className="fa fa-phone mr-2" /> 1-800-654-3210
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5 pt-lg-0 pt-5">
            <h3 className="title-style">
              We have business skills that will increase your earnings
            </h3>
            <p className="mt-lg-4 mt-3 mb-sm-5 mb-4">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet consectetur adipisicing elit.
            </p>
            <div className="two-grids mt-md-0 mt-md-5 mt-4">
              <div className="grids_info">
                <i className="fas fa-user-clock primary-clr-bg" />
                <div className="detail">
                  <h4>Start your own business in minutes</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit.
                  </p>
                </div>
              </div>
              <div className="grids_info mt-5">
                <i className="fas fa-laptop-house green-clr-bg" />
                <div className="detail">
                  <h4>Open a business account online</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit.
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

export default WhyChooseUs;
