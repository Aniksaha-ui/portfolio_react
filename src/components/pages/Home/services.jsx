import { Link } from "react-router-dom";

const Services = ({ services }) => {
  return (
    <section className="about-section py-5">
      <div className="container py-lg-5 py-4">
        <div
          className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4"
          style={{ maxWidth: 600 }}
        >
          <h3 className="title-style mb-2">
            My working invlovnce
          </h3>
          <p>
          As a software engineer with expertise in React, Angular, 
          Dotnet Core, and Node.js, I offer a comprehensive range of 
          professional software development services tailored to meet your
           business needs. From consultation and project management to design, 
           development, maintenance, and support, 
           I can help you create custom web or mobile applications that 
           are user-friendly and scalable. With my skills and experience, 
           I can ensure your project is delivered on time and within budget. 
           Let me help your business succeed through expert software development 
           services. Contact me today to discuss your project requirements
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
                  <Link to="/">Development</Link>
                </h5>
                <p>
                Writing the actual code using programming languages javascript and php
                 to implement the design and functionality of the software.
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
                  <Link to="/">Maintenance</Link>
                </h5>
                <p>
                  Providing ongoing support, updates, and enhancements to the software to address issues, add new features, and adapt to changing requirements over time
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
                  <a href="about.html">Testing</a>
                </h5>
                <p>
                Conducting tests to identify and fix errors, bugs, and inconsistencies in the software to ensure its reliability, security, and performance.
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
