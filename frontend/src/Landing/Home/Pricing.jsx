import React from "react";

function Pricing() {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-1/3">
          <h1 className="mb-3 text-3xl font-bold">Unbeatable pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-blue-500 hover:text-blue-700 no-underline">
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="w-1/6"></div>
        <div className="w-1/2 mb-5">
          <div className="flex text-center">
            <div className="flex-1 p-3 border">
              <h1 className="mb-3 text-3xl font-bold">₹0</h1>
              <p>
                Free equity delivery and
                <br />
                direct mutual funds
              </p>
            </div>
            <div className="flex-1 p-3 border">
              <h1 className="mb-3 text-3xl font-bold">₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
