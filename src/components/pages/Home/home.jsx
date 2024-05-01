import { useEffect, useState } from "react";
import useApi from "../../../services/hooks/useApi";
import WhyChooseUs from "./whychoose";
import Services from "./services";
import Learning from "./learning";
import Banner from "./banner";

const Home = () => {
  const api = useApi();
  const [serviceSection, setServiceSection] = useState({});
  const [aboutUsSection, setAboutUsSection] = useState({});
  const [services, setServices] = useState([]);
  const [learning, setLearning] = useState([]);
  const [latestBlogs, setLatestBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const homePageInformation = await api.homePageInformation();
    if (homePageInformation) {
      await setServiceSection(homePageInformation.whyus);
      await setAboutUsSection(homePageInformation.aboutUs);
      await setServices(homePageInformation.ourservices);
      await setLearning(homePageInformation.learnings);
      await setLatestBlog(homePageInformation.latestBlogs);
      // await setLoading(false);
    } else {
    }
  };

  // if(loading){
  //   return <Loading/>
  // }

  return (
    <>
      <div>
        {/* banner section */}
        <Banner />
        {/* //banner section */}
        {/* 3grids section */}
        <Services />
        {/* //3grids section */}
        {/* home block 3 */}
        <WhyChooseUs />
        {/* //home block 3 */}
        {/* home page service block */}
        <Learning />
        {/* //home page service block */}
        {/* video section */}
        <section className="w3l-ab-section py-5">
          <div className="container py-md-5 py-4">
            <div className="row py-lg-4">
              <div className="col-lg-6 section-width align-self">
                <h3 className="title-style pr-xl-5">
                  We help businesses launch, grow and succeed
                </h3>
                <p className="mt-lg-4 mt-3 pb-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
                  corrupti odit? At iure facere, porro repellat officia quas,
                  dolores magnam assumenda soluta odit harum voluptate inventore
                  ipsa maiores fugiat accusamus eos nulla. Iure voluptatibus
                  explicabo officia.
                </p>
                <a href="services.html" className="btn btn-style mt-4">
                  Our Services
                </a>
              </div>
              <div className="col-lg-6 history-info mt-5 pt-lg-0 pt-5">
                <div className="position-relative img-border">
                  <img
                    src="assets/images/video.jpg"
                    className="img-fluid video-popup-image"
                    alt="video-popup"
                  />
                  <a
                    href="#small-dialog"
                    className="popup-with-zoom-anim play-view text-center position-absolute"
                  >
                    <span className="video-play-icon">
                      <span className="fa fa-play" />
                    </span>
                  </a>
                  {/* dialog itself, mfp-hide class is required to make dialog hidden */}
                  <div id="small-dialog" className="zoom-anim-dialog mfp-hide">
                    <iframe
                      src="https://player.vimeo.com/video/80590590"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //video section */}
      </div>
    </>
  );
};

export default Home;
