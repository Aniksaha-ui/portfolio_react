const Banner = ()=>{
    return (
        <section className="hero-section" id="heroSlideActive">
        <div className="single-hero-slide bg-img-center d-flex align-items-center text-center lazy" data-bg="assets/img/hero_slider/1623595517.jpg">
          <div className="container">
            <div className="slider-text">
              <span className="small-text" data-animation="fadeInDown" data-delay=".3s">Welcome to Hotelia</span>
              <h1 data-animation="fadeInLeft" data-delay=".6s">Luxury Living</h1>
              <a className="btn filled-btn" href="http://example.com/" data-animation="fadeInUp" data-delay=".9s">
                get started <i className="far fa-long-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Banner;