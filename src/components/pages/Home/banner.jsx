const Banner = () => {
  return (
    <section id="home" className="w3l-banner py-5">
      <div className="banner-image"></div>
      <div className="banner-content">
        <div className="container pt-5 pb-md-4">
          <div className="row align-items-center py-4">
            <div className="col-md-6 pr-lg-5">
              <h3 className="mb-lg-4 mb-3 title">
                Professional Web Developer <span>Frontend & Backend</span>
              </h3>
              <p className="mr-5">
               Hello Everyone,
              </p>
              <p>
              I am Anik Saha,
               I complete my BSC from East West University in CSE at 2019.
                After complete my BSC, I join a company named Twihive Digital as a Android App Developer.
                In this company, i create a EMI calculator project. In June 2022, I join in ERA Infotech Ltd as a Software Engineer(web) in Enterprise Solution Department. I continue here till June,2023. After that, I join in SSL WIreless as software associate. SSL Wireless provide  International Payment getaway. My current responsibility is to manage payment getaway and other development different section of FINTECH. My current tech is React, Node js, Angular, Laravel and ASP.NET.
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
                  src="assets/images/anik.jpg"
                  className="img-fluid radius-image-full position-relative"
                  alt=" "
                />
              </div>
              <div className="banner-style-1 d-flex align-items-center">
                <i className="fas fa-chart-line green-clr-bg" />
                <h4>Project Management</h4>
              </div>
              <div className="banner-style-1 banner-style-2 d-flex align-items-center">
                <i className="fas fa-shield-alt primary-clr-bg" />
                <h4>Need Development ?</h4>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
