const Learning = ({ learnings }) => {
  return (
    <section className="latest-room section-bg section-padding">
      <div className="container-fluid">
        <div className="row align-items-center no-gutters">
          <div className="col-lg-3">
            {/* Section Title */}
            <div className="section-title">
              <span className="title-top with-border">Learning- with us</span>
              <h1>What you will learn from here</h1>
              <p>
                Basic and some advanced topics of HTML,CSS,JAVASCRIPT,REACT.You
                will do some industry level project, will create your portfolio
              </p>
              {/* Page Info */}
              <div className="page-Info" />
              {/* Room Arrow */}
              <div className="room-arrows" />
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1">
            <div className="latest-room-slider" id="roomSliderActive">
              <div className="single-room">
                <a
                  className="room-thumb d-block"
                  href="room_details/31/four-points-by-sheraton-manhattan-midtown-west.html"
                >
                  <img
                    className="lazy"
                    src="https://www.cnet.com/a/img/resize/6f59de6f421aca65461420ada94716b37c756c87/hub/2011/01/18/8d118cb0-fdc0-11e2-8c7c-d4ae52e62bcc/HTML5-wow.png?auto=webp&fit=crop&height=675&width=1200"
                    alt
                  />
                </a>
                <div className="room-desc">
                  <h4>
                    <p>Introduction With HTML</p>
                  </h4>
                  <p>
                    HTML forms the foundation, defining the structure of every
                    web page with simplicity and clarity.
                  </p>
                </div>
              </div>
              <div className="single-room">
                <a
                  className="room-thumb d-block"
                  href="room_details/31/four-points-by-sheraton-manhattan-midtown-west.html"
                >
                  <img
                    className="lazy"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSB37IruVGqDmZr-cwS68XWUDRPWmfnoKpmVN0tTPNQ&s"
                    alt
                  />
                </a>
                <div className="room-desc">
                  <h4>
                    <p>Introduction With CSS</p>
                  </h4>
                  <p>
                    CSS adds the vibrant colors and sleek styles, transforming
                    static elements into dynamic designs
                  </p>
                </div>
              </div>
              <div className="single-room">
                <a
                  className="room-thumb d-block"
                  href="room_details/31/four-points-by-sheraton-manhattan-midtown-west.html"
                >
                  <img
                    className="lazy"
                    src="https://img.freepik.com/premium-vector/bootstrap-flat-logo-vector-illustration_582637-461.jpg"
                    alt
                  />
                </a>
                <div className="room-desc">
                  <h4>
                    <p>Beginning to Advanced Bootstrap</p>
                  </h4>
                  <p>
                    Bootstrap injects efficiency, offering a robust framework
                    for rapid development and responsive layouts
                  </p>
                </div>
              </div>
              <div className="single-room">
                <a
                  className="room-thumb d-block"
                  href="room_details/31/four-points-by-sheraton-manhattan-midtown-west.html"
                >
                  <img
                    className="lazy"
                    src="https://w0.peakpx.com/wallpaper/797/913/HD-wallpaper-javascript-black-logo-programming-language-grid-metal-background-javascript-artwork-creative-programming-language-signs-javascript-logo.jpg"
                    alt
                  />
                </a>
                <div className="room-desc">
                  <h4>
                    <p>Beginning to Advanced Javascript</p>
                  </h4>
                  <p>
                    JavaScript breathes life into web applications, fueling
                    interactivity and dynamic functionality.
                  </p>
                </div>
              </div>
              <div className="single-room">
                <a
                  className="room-thumb d-block"
                  href="room_details/31/four-points-by-sheraton-manhattan-midtown-west.html"
                >
                  <img
                    className="lazy"
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png"
                    alt
                  />
                </a>
                <div className="room-desc">
                  <h4>
                    <p>React - Most popular Libray</p>
                  </h4>
                  <p>
                    React revolutionizes frontend development, with its
                    component-based architecture and declarative approach,
                    streamlining UI development like never before.
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

export default Learning;
