import React from "react";

function Education() {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <img src="media/images/education.svg" className="w-3/5" alt="Education" />
        </div>
        <div className="w-1/2">
          <h1 className="mb-3 text-4xl font-bold">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="no-underline">
            Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="no-underline">
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
