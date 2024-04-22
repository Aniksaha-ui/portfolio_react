const Services = ({services})=>{

    return (
        <section className="service-section section-padding">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <span className="title-top">Our Services</span>
                <h1>We Provide Most Exclusive Software Solution</h1>
              </div>
            </div>
          </div>
          {/* Service Boxes */}
          <div className="row">
           {services.map((service,index) =>
                <div className="col-lg-4 col-md-6">
                <div className="single-service-box text-center wow fadeIn animated" data-wow-duration="1500ms" data-wow-delay="200ms">
                <span className="service-counter">{index+1}</span>
                <div className="service-icon">
                    <i className={service.header_text} />
                </div>
                <p dangerouslySetInnerHTML={{ __html: service.sub_text }}></p>
               
                <a href="service_details/7/rooms-%26-appartment.html" className="read-more">
                    read more <i className="far fa-long-arrow-right" />
                </a>
                </div>
            </div>
     
            )}
            
          </div>
        </div>
      </section>
    )
}

export default Services;