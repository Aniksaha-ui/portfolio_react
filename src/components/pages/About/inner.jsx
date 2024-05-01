const Inner = ()=>{

    return (
        <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-4 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-5">
              About Us
            </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">
                <i className="fas fa-angle-right mx-2" />
                About
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
}


export default Inner;