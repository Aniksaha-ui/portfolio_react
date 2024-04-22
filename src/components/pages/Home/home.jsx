import { useEffect, useState } from "react";
import useApi from "../../../services/hooks/useApi";
import WhyChooseUs from "./whychoose";
import AboutUs from "./aboutUs";
import Services from "./services";
import Learning from "./learning";

const Home = () =>{
  const api = useApi();
  const [serviceSection,setServiceSection] = useState({});
  const [aboutUsSection,setAboutUsSection] = useState({});
  const [services,setServices]=useState([]);
  const [learning,setLearning] = useState([]);
  const [loading,setLoading] = useState(true);
    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () =>{
      const homePageInformation = await api.homePageInformation();
      if(homePageInformation){
          await setServiceSection(homePageInformation.whyus);
          await setAboutUsSection(homePageInformation.aboutUs);
          await setServices(homePageInformation.ourservices);
          await setLearning(homePageInformation.learnings)
          setLoading(false);
      } else {
        console.log(homePageInformation,"1111")
      }
    }

    return (
  <main>
  {/* Hero Section Start */}
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
    <div className="single-hero-slide bg-img-center d-flex align-items-center text-center lazy" data-bg="assets/img/hero_slider/1623595549.jpg">
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
    <div className="single-hero-slide bg-img-center d-flex align-items-center text-center lazy" data-bg="assets/img/hero_slider/1623595697.jpg">
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
  {/* Hero Section End */}
  {/* Booking Search Form Start */}
  <section className="booking-section">
    <div className="container">
      <div className="booking-form-wrap bg-img-center section-bg">
        <form action="https://codecanyon.kreativdev.com/hotelia/demo/rooms" method="GET">
          <input type="hidden" name="_token" defaultValue="Cna4ecMAJym8KQVqYoiNzfcv7GrR6j3JEW6CQwv6" />            
          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6">
              <div className="input-wrap">
                <input type="text" placeholder="Check In / Out Date" id="date-range" name="dates" readOnly />
                <i className="far fa-calendar-alt" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="input-wrap">
                <select name="beds" className="nice-select">
                  <option selected disabled>Beds</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="input-wrap">
                <select name="baths" className="nice-select">
                  <option selected disabled>Baths</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="input-wrap">
                <button type="submit" className="btn filled-btn btn-block rounded-0">
                  search <i className="far fa-long-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="booking-shape-1">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/shape/01.png" alt="shape" />
        </div>
        <div className="booking-shape-2">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/shape/02.png" alt="shape" />
        </div>
        <div className="booking-shape-3">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/shape/03.png" alt="shape" />
        </div>
      </div>
    </div>
  </section>
  {/* Booking Search Form End */}
  {/* Welcome Section Start */}
    <AboutUs aboutUsSection={aboutUsSection}/>
  {/* Welcome Section End */}
  {/* Latest Room Section Start */}
      <Learning learnings={learning}/>
  {/* Latest Room Section End */}
  {/* Service Section Start */}
    <Services services={services}/>
  {/* Service Section End */}
  {/* Call To Action Start */}
  <section className="cta-section bg-img-center lazy " data-bg="assets/img/booking-img.jpg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-10">
          <div className="cta-left-content">
            <span>Looking For Luxury Hotel</span>
            <h1>Book Right Now</h1>
            <a href="http://example.com/" className="btn filled-btn">
              Book Now <i className="far fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-md-2">
          <div className="video-icon text-right">
            <a href="https://www.youtube.com/watch?v=4eJ8sJGh5dA" className="video-popup"> <i className="fas fa-play" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Call To Action End */}
  {/* Package Section Start */}
  <section className="ma-package-section section-padding featured-packages">
    <div className="container">
      {/* Section Title */}
      <div className="section-title text-center">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <span className="title-top">Featured Tour Packages</span>
            <h1>Take a Look at Our Awesome Packages</h1>
          </div>
        </div>
      </div>
      {/* Package Boxes */}
      <div className="row">
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/15/usa---western-wonders-(cosmos).html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623598494.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/15/usa---western-wonders-(cosmos).html">USA - Western Wonders (Cosmos)</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 120.00  (FIXED)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 3</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 5</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/16/grand-bargain-tour-of-usa-(holiday-saving-account).html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623598923.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/16/grand-bargain-tour-of-usa-(holiday-saving-account).html">Grand Bargain Tour Of USA (Holiday Saving Account)</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 40.00  (PER-PERSON)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 1</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 6</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/17/customizable---las-vegas---a-la-carte.html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623599177.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/17/customizable---las-vegas---a-la-carte.html">Customizable - Las Vegas - A La Carte</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> NEGOTIABLE</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 3</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 7</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/18/orlando---ala-carte.html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623599575.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/18/orlando---ala-carte.html">Orlando - Ala Carte</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 180.00  (FIXED)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 5</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 5</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/19/miami---a-la-carte.html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623600032.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/19/miami---a-la-carte.html">Miami - A La Carte</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 30.00  (PER-PERSON)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 1</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 3</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="packages-post-item">
            <a className="post-thumbnail d-block" href="package_details/20/san-francisco---a-la-carte.html">
              <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/packages/1623602478.jpg" alt="package img" />
            </a>
            <div className="entry-content">
              <h3 className="title">
                <a href="package_details/20/san-francisco---a-la-carte.html">San Francisco - A La Carte</a>
              </h3>
              <div className="post-meta">
                <ul>
                  <li><span><i className="fas fa-comment-dollar" /><strong>Package Price:</strong> $ 20.00  (PER-PERSON)</span></li>
                  <li><span><i className="fas fa-users" /><strong>Number of Days:</strong> 6</span></li>
                  <li><span><i className="fas fa-users" /><strong>Maximum Persons:</strong> 4</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Package Section End */}
  {/* Why Choose Us/Facility Section Start */}
      <WhyChooseUs serviceSection={serviceSection}/>
  {/* Why Choose Us/Facility Section End */}
  {/* Feedback Section Start */}
  <section className="feedback-section section-padding">
    <div className="container">
      {/* Section Title */}
      <div className="section-title text-center">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <span className="title-top">Clients Feedback</span>
            <h1>What Our Satisfied Clients Say About Us</h1>
          </div>
        </div>
      </div>
      <div className="feadback-slide" id="feedbackSlideActive">
        <div className="single-feedback-box">
          <p>Omnis voluptas assumde est omnis dolor reporibus autem quidam et aut ciise debitiset arerum neces tibus saep on ways feels like ways.</p>
          <h5 className="feedback-author">James M. Varney</h5>
        </div>
        <div className="single-feedback-box">
          <p>At vero eos et accusamu way set iusto odio dignis ducimus qui bpraes enum voluptatum deleniti atque corrupti quos dolores others worlds.</p>
          <h5 className="feedback-author">David K. Vinson</h5>
        </div>
        <div className="single-feedback-box">
          <p>Omnis voluptas assumde est omnis dolor reporibus autem quidam et aut ciise debitiset arerum neces tibus saep on ways feels like ways.</p>
          <h5 className="feedback-author">James M. Varney</h5>
        </div>
      </div>
    </div>
  </section>
  {/* Feedback Section End */}
  {/* Brands Section Start */}
  <section className="brands-section primary-bg">
    <div className="container">
      <div id="brandsSlideActive" className="row">
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624260969.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624260980.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624260990.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624261000.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624261012.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624261023.png" alt="brand image" />
        </a>
        <a className="brand-item text-center d-block" href="http://example.com/" target="_blank">
          <img className="lazy" data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/brands/1624261034.png" alt="brand image" />
        </a>
      </div>
    </div>
  </section>
  {/* Brands Section End */}
</main>

    )
}

export default Home;