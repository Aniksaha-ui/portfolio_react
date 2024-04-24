import { useEffect, useState } from "react";
import useApi from "../../../services/hooks/useApi";
import WhyChooseUs from "./whychoose";
import AboutUs from "./aboutUs";
import Services from "./services";
import Learning from "./learning";
import LatestBlog from "./LatestBlog";
import Loading from "../common/loading";
import Banner from "./banner";

const Home = () =>{
  const api = useApi();
  const [serviceSection,setServiceSection] = useState({});
  const [aboutUsSection,setAboutUsSection] = useState({});
  const [services,setServices]=useState([]);
  const [learning,setLearning] = useState([]);
  const [latestBlogs,setLatestBlog] = useState([]);
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
          await setLearning(homePageInformation.learnings);
          await setLatestBlog(homePageInformation.latestBlogs);
          // await setLoading(false);
      } else {
      }
    }

    // if(loading){
    //   return <Loading/>
    // }


    return (
  <main>
  {/* Hero Section Start */}
      <Banner />
  {/* Hero Section End */}
  {/* Booking Search Form Start */}
  {/* <section className="booking-section">
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
  </section> */}
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
  {/* <section className="cta-section bg-img-center lazy " data-bg="assets/img/booking-img.jpg">
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
  </section> */}
  {/* Call To Action End */}
  {/* Latest Blogs Section Start */}
      <LatestBlog latestBlogs={latestBlogs}/>
  {/* Latest Blogs Section End */}
  {/* Why Choose Us/Facility Section Start */}
      <WhyChooseUs serviceSection={serviceSection}/>
  {/* Why Choose Us/Facility Section End */}
  {/* Feedback Section Start 
  
  
  
  */}
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
  {/* <section className="brands-section primary-bg">
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
  </section> */}
  {/* Brands Section End */}
</main>

    )
}

export default Home;