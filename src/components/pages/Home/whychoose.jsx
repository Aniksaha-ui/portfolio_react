const WhyChooseUs = ({serviceSection})=>{
    return (
        <section className="wcu-section section-bg section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 offset-lg-1">
              {/* Section Title */}
              <div className="feature-left">
                <div className="section-title">
                  <span className="title-top with-border">{serviceSection.header_text}</span>
                <p dangerouslySetInnerHTML={{ __html: serviceSection.sub_text }}></p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-img">
                <div className="feature-abs-con">
                  <div className="f-inner">
                    <i className="far fa-stars" />
                    <p>Popular Features</p>
                  </div>
                </div>
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/facility_section/1623656923.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default WhyChooseUs;