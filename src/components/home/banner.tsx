import React from "react";
import Link from "next/link";
const Banner = () => {
  return (
    <div className='bg-[url("/banner.jpg")] bg-cover bg-center bg-no-repeat min-h-screen'>
      {/* Dark overlay */}
      <div className="bg-[#1E2A56]/60 min-h-screen flex items-center">
        {/* Banner content */}
        <div className="max-w-7xl mx-auto w-full px-6 py-20">
          <h2 className="text-4xl md:text-6xl font-bold text-[#f5f0ea] leading-tight max-w-3xl">
            Goodness Begins When We Come{" "}
            <span className="bg-[#f5f0ea] text-[#1E2A56] px-2">Together.</span>
          </h2>

          <p className="text-lg md:text-xl text-[#f5f0ea] mt-6 max-w-2xl leading-relaxed">
            Discover meaningful events, lend a helping hand, and become part of
            something good. Together, we can make a difference.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 mt-10">
            <Link
              href="#events"
              className="bg-[#f5f0ea] text-[#1E2A56] px-8 py-5 font-semibold transition-all duration-300 hover:bg-[#1E2A56] hover:text-[#f5f0ea] hover:-translate-y-1"
            >
              Explore Events
            </Link>

            <Link
              href="#create-event"
              className="border border-[#f5f0ea] text-[#f5f0ea] px-8 py-5 font-semibold transition-all duration-300 hover:bg-[#f5f0ea] hover:text-[#1E2A56] hover:-translate-y-1"
            >
              Create an Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
