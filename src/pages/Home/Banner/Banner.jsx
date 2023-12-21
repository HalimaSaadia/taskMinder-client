import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[550px]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3184666/pexels-photo-3184666.jpeg?auto=compress&cs=tinysrgb&w=600)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Streamlining Your Tasks with Precision and Ease
            </h1>

            <Link to="/task-manager">
              <button className="btn mt-5 px-10 bg-[#14191E] rounded-none">
                Let's Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
