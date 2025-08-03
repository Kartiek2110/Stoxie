import React from "react";

function Stats() {
  return (
    <div className="container mx-auto p-3">
      <div className="flex p-5">
        <div className="w-1/2 p-5">
          <h1 className="text-3xl font-bold mb-5">Trust with confidence</h1>
          <h2 className="text-xl font-semibold">Customer-first always</h2>
          <p className="text-gray-600 mb-4">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="text-xl font-semibold">No spam or gimmicks</h2>
          <p className="text-gray-600 mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="text-xl font-semibold">The Zerodha universe</h2>
          <p className="text-gray-600 mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="text-xl font-semibold">Do better with money</h2>
          <p className="text-gray-600 mb-4">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="w-1/2 p-5">
          <img src="media/images/ecosystem.png" className="w-11/12" alt="Ecosystem" />
          <div className="text-center mt-4">
            <a href="" className="mx-5 text-blue-500 hover:text-blue-700 no-underline">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="" className="text-blue-500 hover:text-blue-700 no-underline">
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
