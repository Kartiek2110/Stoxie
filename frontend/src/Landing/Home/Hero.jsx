import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-20 mb-20">
      <div className="flex flex-col items-center text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-20 w-11/12"
        />
        <h1 className="mt-20 text-5xl font-bold">Invest in everything</h1>
        <p className="text-lg">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 bg-blue-500 text-white text-xl mb-20 rounded hover:bg-blue-600"
          onClick={() => navigate("/signup")}
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
