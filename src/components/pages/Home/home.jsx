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
    // const homePageInformation = await api.homePageInformation();
    // if (homePageInformation) {
    //   await setServiceSection(homePageInformation.whyus);
    //   await setAboutUsSection(homePageInformation.aboutUs);
    //   await setServices(homePageInformation.ourservices);
    //   await setLearning(homePageInformation.learnings);
    //   await setLatestBlog(homePageInformation.latestBlogs);
    //   // await setLoading(false);
    // } else {
    // }
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

         {/* home block 3 */}
         <WhyChooseUs />
        {/* //home block 3 */}
        
        {/* 3grids section */}
        <Services />
        {/* //3grids section */}
       
        {/* home page service block */}
        <Learning />
        {/* //home page service block */}
        {/* video section */}
    
        {/* //video section */}
      </div>
    </>
  );
};

export default Home;
