import { BASE_URL } from "../../../services/common/constants"

const LatestBlog = ({latestBlogs})=>{

    return (
        <section className="ma-package-section section-padding featured-packages">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <span className="title-top">Latest Blogs</span>
                <h1>Take a Look at our latest</h1>
              </div>
            </div>
          </div>
          {/* Package Boxes */}
          <div className="row">
            {latestBlogs.map(blog =>
            <div className="col-lg-6">
                <div className="packages-post-item">
                <a className="post-thumbnail d-block" href="package_details/15/usa---western-wonders-(cosmos).html">
                    <img className="lazy" src={`${BASE_URL}${blog.img}`} alt="package img" />
                   
                </a>
                <div className="entry-content">
                    <h3 className="title">
                    <p>{blog.header_text}</p>
                    </h3>
                    <div className="post-meta">
                        {/* <p dangerouslySetInnerHTML={{ __html: blog.sub_text }}></p> */}
                    </div>
                </div>
                </div>
            </div>    
                
            )}
            
          </div>
        </div>
      </section>
    )
}


export default LatestBlog