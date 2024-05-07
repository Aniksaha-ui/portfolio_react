import { Link, useNavigate, useLocation } from "react-router-dom";

const { Fragment } = require("react");

const Header = () => {
  // const navigate = useNavigate();
  // const handleRedirect = (routeName) =>{
  //   navigate('/service')
  // }

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke px-0">
          <h1>
            <a className="navbar-brand" href="index.html">
              <i className="fab fa-mastodon" />
              Anik&nbsp;<span>Saha</span>
            </a>
          </h1>
          {/* if logo is image enable this   
  <a class="navbar-brand" href="#index.html">
<img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
  </a> */}
          <button
            className="navbar-toggler  collapsed bg-gradient"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars" />
            <span className="navbar-toggler-icon fa icon-close fa-times" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              {/* search button */}
              <div className="search-right ml-xl-3 ml-1 mr-xl-1">
                <form
                  action="#error"
                  method="GET"
                  className="search-box position-relative"
                >
                  <input
                    type="search"
                    placeholder="Enter Keyword"
                    name="search"
                    required="required"
                    autofocus
                    className="search-popup"
                  />
                  <button type="submit" className="btn search-btn">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
              {/* //search button */}
            </ul>
          </div>
          {/* //search button */}
          {/* toggle switch for light and dark theme */}
          <div className="cont-ser-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="mode-container">
                    <i className="gg-sun" />
                    <i className="gg-moon" />
                  </div>
                </label>
              </div>
            </nav>
          </div>
          {/* //toggle switch for light and dark theme */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
