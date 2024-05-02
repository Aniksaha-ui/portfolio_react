import { useEffect, useState } from "react"
import Learning from "../Home/learning"
import Services from "../Home/services"
import useApi from "../../../services/hooks/useApi";

const Blogs = () =>{

    const api = useApi();

    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetchBlogs();
    },[])

    const fetchBlogs = async ()=>{
        const blogInformation = await api.blogPageInformation();
    if (blogInformation) {
        await setBlogs(blogInformation);
    } else {
    }
    }

    return (
        <section className="home-services py-5" id="services">
        <div className="container py-md-5 py-4">
          <div
            className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4"
            style={{ maxWidth: 600 }}
          >
            <h3 className="title-style mb-2">
              Read Our Blogs - Frontend Related Study
            </h3>
            <p>
              
            </p>
          </div>
          <div className="row">

            {blogs.map((blog,index) =>

                <div className="col-lg-4 col-md-6 mt-4">
                <div className="box-wrap">
                  <div className="icon">
                  <i className={`blue-clr-bg ${blog.icon_name}`} />
                    {/* <i className={'blue-clr-bg' ${blog.icon_name}} /> */}
                  </div>
                  <h4 className="number">{index+1}</h4>
                  <h4>
                    <a href="#url">{blog.title}</a>
                  </h4>
                  <p dangerouslySetInnerHTML={{ __html: blog.description }}></p>
                  <a href="#read" className="read">
                    Read more
                  </a>
                </div>
                </div>
            )}
        
            
          </div>
        </div>
      </section>
      

    )
}

export default Blogs