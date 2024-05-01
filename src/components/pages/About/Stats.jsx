import React from "react";

const Stats = () => {
  return (
    <section className="w3_stats py-5" id="stats">
      <div className="container py-md-5 py-4">
        <div className="w3-stats text-center py-md-4">
          <div className="row mt-4">
            <div className="col-md-3 col-6">
              <div className="counter">
                <i className="fas fa-users" />
                <div
                  className="timer count-title count-number mt-3"
                  data-to={1286}
                  data-speed={1500}
                />
                <p className="count-text">Workers</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter">
                <i className="far fa-smile" />
                <div
                  className="timer count-title count-number mt-3"
                  data-to={36076}
                  data-speed={1500}
                />
                <p className="count-text">Happy Customers</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-md-0 mt-5">
              <div className="counter">
                <i className="fas fa-box-open" />
                <div
                  className="timer count-title count-number mt-3"
                  data-to={16300}
                  data-speed={1500}
                />
                <p className="count-text">Projects</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mt-md-0 mt-5">
              <div className="counter">
                <i className="fas fa-trophy" />
                <div
                  className="timer count-title count-number mt-3"
                  data-to={10630}
                  data-speed={1500}
                />
                <p className="count-text">Win awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
