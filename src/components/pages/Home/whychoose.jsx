const WhyChooseUs = ({ serviceSection }) => {
  return (
    <section className="w3l-servicesblock py-5">
      <div className="container pb-lg-5">
        <div className="row pb-xl-5 align-items-center">
          <div className="col-lg-6 position-relative home-block-3-left pb-lg-0 pb-5">
            <div className="position-relative">
              <img
                src="assets/images/edu.jpg"
                alt
                className="img-fluid radius-image"
              />
            </div>
            <div className="imginfo__box">
              <h6 className="imginfo__title">Want to hire me?</h6>
              <p>
               you can send a email  at sahaanik1045@gmail.com <br/> or 
               <br /> Contact me following email
              </p>
              <a href="tel:http://01628781323">
                <span className="fa fa-phone mr-2" /> 01628781323
              </a>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1 mt-lg-0 mt-5 pt-lg-0 pt-5">
            <h3 className="title-style">
             My Job Expriences
            </h3>
            <p className="mt-lg-4 mt-3 mb-sm-5 mb-4">
            Experienced Software Engineer Specializing in ERP, Fintech, and International Payment Gateways with a Passion for Machine Learning.
            </p>
            <div className="two-grids mt-md-0 mt-md-5 mt-4">
              <div className="grids_info">
                <i className="fas fa-user-clock primary-clr-bg" />
                <div className="detail">
                  <h4>ERA Infotech Ltd</h4>
                  <p>
                    ERA Infotech Limited is a leading IT 
                    services company developing business solutions 
                    and services for banks, non-bank financial institutions
                   (NBFIs), corporations as well as the Government Sector.
                  </p>
                </div>
              </div>
              <div className="grids_info mt-5">
                <i className="fas fa-laptop-house green-clr-bg" />
                <div className="detail">
                  <h4>SSL Wireless</h4>
                  <p>
                    Fintech company which provide a international payment getaway system.
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
