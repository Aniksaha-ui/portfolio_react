import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import useApi from "../../../services/hooks/useApi";

const BlogDetails = () =>{
    const params = useParams();
    const api = useApi();
    const blogId = params.id;
    const [blog,setBlog] = useState([]);
    useEffect(()=>{
        fetchBlogDetails(blogId);
    },[]);

    const fetchBlogDetails = async (blogId) =>{
        const blogInformation = await api.singleBlogInformation(blogId);
        if (blogInformation) {
            await setBlog(blogInformation[0]);
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
              Details of {blog.title}
            </h3>
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: blog.description }}></p>
          </div>
          </div>
        </section>
    )
}

export default BlogDetails