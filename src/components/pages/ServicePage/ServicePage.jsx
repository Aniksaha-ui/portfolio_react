import { Fragment } from "react";

const ServicePage = () => {
  return (
    <Fragment>
      <div>
        {/* inner banner */}
        <section className="inner-banner py-5">
          <div className="w3l-breadcrumb py-lg-5">
            <div className="container pt-4 pb-sm-4">
              <h4 className="inner-text-title font-weight-bold pt-5">
                Services
              </h4>
              <ul className="breadcrumbs-custom-path">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">
                  <i className="fas fa-angle-right mx-2" />
                  Services
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* //inner banner */}
        {/* service block */}
        <section className="w3l-services py-5" id="services">
          <div className="container py-md-5 py-4">
            <div
              className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4"
              style={{ maxWidth: 600 }}
            >
              <h3 className="title-style mb-2">
                What's Services We Are Offering to Our Customers
              </h3>
              <p>
                Ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-laptop-code blue-clr-bg" />
                  </div>
                  <h4 className="number">01</h4>
                  <h4>
                    <a href="#url">Cloud Computing</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                    doloret quas saepe autem, dolor set.
                  </p>
                  <a href="#read" className="read">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-chart-bar primary-clr-bg" />
                  </div>
                  <h4 className="number">02</h4>
                  <h4>
                    <a href="#url">Business Strategy</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                    doloret quas saepe autem, dolor set.
                  </p>
                  <a href="#read" className="read">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-copy green-clr-bg" />
                  </div>
                  <h4 className="number">03</h4>
                  <h4>
                    <a href="#url">Reports Analysis</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                    doloret quas saepe autem, dolor set.
                  </p>
                  <a href="#read" className="read">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-marker primary-clr-bg" />
                  </div>
                  <h4 className="number">04</h4>
                  <h4>
                    <a href="#url">Decision Maker</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                    doloret quas saepe autem, dolor set.
                  </p>
                  <a href="#read" className="read">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-user-cog green-clr-bg" />
                  </div>
                  <h4 className="number">05</h4>
                  <h4>
                    <a href="#url">Customer Oriented</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                    doloret quas saepe autem, dolor set.
                  </p>
                  <a href="#read" className="read">
                    Read more
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box-wrap">
                  <div className="icon">
                    <i className="fas fa-coins blue-clr-bg" />
                  </div>
                  <h4 className="number">06</h4>
                  <h4>
                    <a href="#url">Solution Focused</a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
                    doloret quas saepe autem, dolor set.
                  </p>
                  <a href="#read" className="read">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //service block */}
        {/* middle */}
        <div className="middle py-5">
          <div className="container py-lg-5 py-4">
            <div
              className="welcome-left text-center py-lg-4 m-auto"
              style={{ maxWidth: 700 }}
            >
              <h5>Any plan to start a project</h5>
              <h3 className="mt-2">
                Our Experts always ready to work with you.
              </h3>
              <a
                href="#started"
                className="btn btn-style btn-white mt-sm-5 mt-4"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
        {/* //middle */}
        {/* faq section */}
        <div className="w3l-faq-block py-5" id="faq">
          <div className="container py-lg-5">
            <div className="row">
              <div className="col-lg-7">
                <section className="w3l-faq" id="faq">
                  <h3 className="title-style">Learn more from our FAQ</h3>
                  <p className="mt-3">
                    Ut aut reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat.
                  </p>
                  <div className="faq-page mt-4">
                    <ul>
                      <li>
                        <input type="checkbox" defaultChecked />
                        <i />
                        <h2>How to process the funtion for consulting?</h2>
                        <p>
                          Voluptates amet earum velit nobis aliquam laboriosam
                          nihil debitis facere quae quasi fuga, ad corrupti
                          libero omnis sapiente non assumenda, incidunt officiis
                          eaque iste minima autem.
                        </p>
                      </li>
                      <li>
                        <input type="checkbox" defaultChecked />
                        <i />
                        <h2>
                          How much should I capitalize with at the beginning?
                        </h2>
                        <p>
                          Voluptates amet earum velit nobis aliquam laboriosam
                          nihil debitis facere quae quasi fuga, ad corrupti
                          libero omnis sapiente non assumenda, incidunt officiis
                          eaque iste minima autem.
                        </p>
                      </li>
                      <li>
                        <input type="checkbox" defaultChecked />
                        <i />
                        <h2>Where should I incorporate my business?</h2>
                        <p>
                          Voluptates amet earum velit nobis aliquam laboriosam
                          nihil debitis facere quae quasi fuga, ad corrupti
                          libero omnis sapiente non assumenda, incidunt officiis
                          eaque iste minima autem.
                        </p>
                      </li>
                      <li>
                        <input type="checkbox" defaultChecked />
                        <i />
                        <h2>We denounce with righteous?</h2>
                        <p>
                          Voluptates amet earum velit nobis aliquam laboriosam
                          nihil debitis facere quae quasi fuga, ad corrupti
                          libero omnis sapiente non assumenda, incidunt officiis
                          eaque iste minima autem.
                        </p>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
              <div className="col-lg-5 mt-lg-0 mt-sm-5 mt-4">
                <div className="banner-form-w3">
                  {/* banner form */}
                  <form action="#" method="post">
                    <h3 className="title-style">
                      Request a <span>Quote</span>
                    </h3>
                    <p className="mt-3 text-dark">
                      Fill all information details to consult with us to get
                      sevices from us
                    </p>
                    <div className="form-style-w3ls mt-4">
                      <input
                        placeholder="Your Name"
                        name="name"
                        type="text"
                        required
                      />
                      <input
                        placeholder="Your Email"
                        name="email"
                        type="email"
                        required
                      />
                      <input
                        placeholder="Phone Number"
                        name="phone"
                        type="text"
                        required
                      />
                      <button className="btn btn-style w-100">
                        {" "}
                        Get a Quote
                      </button>
                    </div>
                  </form>
                  {/* //banner form */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //faq section */}
      </div>
    </Fragment>
  );
};

export default ServicePage;
