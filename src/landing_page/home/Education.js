import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        <div className="col-6 p-5">
          <img src="media/images/education.svg" alt="home education" />
        </div>
        <div className="col-6  mb-5 mt-5  p-3">
          <div className="row  ">
            <h1>Free and open market education</h1>

            <div className="mt-5">
              <p className="text-muted">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>

              <a href="#" style={{ textDecoration: "none" }}>
                Versity{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#74C0FC" }}
                ></i>
              </a>
            </div>
            <div className="mt-5">
              <p className="text-muted">
                TradingQ&A, the most active trading and investment community in
                India for all your market related queries.
              </p>

              <a href="#" style={{ textDecoration: "none" }}>
                TradingQ&A{" "}
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#74C0FC", width: "90%" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
