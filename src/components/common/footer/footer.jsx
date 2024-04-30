const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="widget footer-widget">
                <div className="footer-logo">
                  <img
                    className="lazy"
                    data-src="https://codecanyon.kreativdev.com/hotelia/demo/assets/img/1624260797.png"
                    alt="footer logo"
                  />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                </p>
                <ul className="social-icons">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.google.com/">
                      <i className="fab fa-google" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="widget footer-widget">
                <h4 className="widget-title">Quick Links</h4>
                <ul className="nav-widget clearfix">
                  <li>
                    <a href="http://localhost/hotelbooking/about-us">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost/hotelbooking/terms-&-conditions">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost/hotelbooking/faqs">FAQs</a>
                  </li>
                  <li>
                    <a href="http://localhost/hotelbooking/contact">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="http://localhost/hotelbooking/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="http://localhost/hotelbooking/services">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="widget footer-widget">
                <h4 className="widget-title">Recent Blogs</h4>
                <ul className="recent-post">
                  <li>
                    <h6>
                      <a href="blog_details/16/top-10-things-to-do-in-melbourne-with-kids.html">
                        Top 10 Things to Do in Melbourne With Ki...
                      </a>
                    </h6>
                    <span className="recent-post-date">June 14, 2021</span>
                  </li>
                  <li>
                    <h6>
                      <a href="blog_details/15/unique-travel-ideas-that-don%e2%80%99t-involve-a-hotel.html">
                        Unique Travel Ideas That Don’t Involve a...
                      </a>
                    </h6>
                    <span className="recent-post-date">June 14, 2021</span>
                  </li>
                  <li>
                    <h6>
                      <a href="blog_details/14/the-best-beaches-in-the-philippines.html">
                        The Best Beaches in the Philippines
                      </a>
                    </h6>
                    <span className="recent-post-date">June 14, 2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-12">
              <p className="copy-right text-center"></p>
              <p>
                <span
                  style={{
                    color: "rgb(34,34,34)",
                    fontFamily:
                      'consolas, "lucida console", "courier new", monospace',
                    fontSize: 12,
                  }}
                >
                  Copyright ©2020. All Rights Reserved
                </span>
                <br />
              </p>
              <p />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
