import React from "react";

function Awards() {
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-wrap">
        <div className="w-1/2 p-20">
          <img src="media/images/largestBroker.svg" alt="Largest Broker" />
        </div>
        <div className="w-1/2 p-20 mt-20">
          <h1 className="text-4xl font-bold mb-4">Largest stock broker in India</h1>
          <p className="mb-20 text-lg">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <ul className="space-y-2">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="space-y-2">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" className="w-9/10 mt-4" alt="Press Logos" />
        </div>
      </div>
    </div>
  );
}

export default Awards;
