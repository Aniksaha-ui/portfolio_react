const AboutUs = ({aboutUsSection}) =>{
    return (
        <section className="welcome-section section-padding">
        <div className="container">
          <div className="row align-items-center no-gutters">
            {/* Title Gallery Start */}
            <div className="col-lg-6">
              <div className="title-gallery">
                <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/intro_section/1623596538.jpg" alt="image" />
              </div>
            </div>
            {/* Title Gallery End */}
            <div className="col-lg-5 offset-lg-1">
              {/* Section Title */}
              <div className="section-title">
                <span className="title-top with-border">{aboutUsSection.header_text}</span>
                
                <p dangerouslySetInnerHTML={{ __html: aboutUsSection.sub_text }}></p>
              </div>
     
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutUs