const Learning = ({ learnings }) => {
  return (
    <section className="home-services py-5" id="services">
    <div className="container py-md-5 py-4">
      <div
        className="title-heading-w3 mx-auto text-center mb-sm-5 mb-4 pb-xl-4"
        style={{ maxWidth: 600 }}
      >
        <h3 className="title-style mb-2">
          What's Services I am Offering to My Customers
        </h3>
        <p>
          Ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="box-wrap">
            <div className="icon">
              <i className="fas fa-laptop-code blue-clr-bg" />
            </div>
            <h4 className="number">01</h4>
            <h4>
              <a href="#url">Server Deployment</a>
            </h4>
            <p>
            Server deployment is the process of setting up and configuring servers to make software applications or services accessible and operational to end-users over a network or the internet.
            </p>
            <a href="#read" className="read">
              
            </a>
          </div>
        </div>
  
        <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
          <div className="box-wrap">
            <div className="icon">
              <i className="fas fa-copy green-clr-bg" />
            </div>
            <h4 className="number">02</h4>
            <h4>
              <a href="#url">Reports Analysis</a>
            </h4>
            <p>
            Report analysis involves examining data, statistics, and findings within reports to derive insights, trends, and conclusions that inform decision-making and strategic planning.
            </p>
            <a href="#read" className="read">
              
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className="box-wrap">
            <div className="icon">
              <i className="fas fa-marker primary-clr-bg" />
            </div>
            <h4 className="number">03</h4>
            <h4>
              <a href="#url">Decision Maker</a>
            </h4>
            <p>
            Collaborating with the product team to collectively make informed decisions that align with strategic goals, user needs, and market trends, ensuring the successful development and delivery of innovative and customer-centric products
            </p>
            <a href="#read" className="read">
              
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className="box-wrap">
            <div className="icon">
              <i className="fas fa-user-cog green-clr-bg" />
            </div>
            <h4 className="number">04</h4>
            <h4>
              <a href="#url">Customer Support</a>
            </h4>
            <p>
              Customer support in software engineering involves providing assistance, troubleshooting, and resolving issues for users of software products.
            </p>
            <a href="#read" className="read">
              
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className="box-wrap">
            <div className="icon">
              <i className="fas fa-coins blue-clr-bg" />
            </div>
            <h4 className="number">05</h4>
            <h4>
              <a href="#url">Solution Focused</a>
            </h4>
            <p>
            Solution focus involves directing attention towards identifying and implementing practical solutions to problems rather than dwelling on the problems themselves.
            </p>
            <a href="#read" className="read">
              
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Learning;
