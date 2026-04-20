import React from "react";

const Testimonial = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">

      {/* 🔵 LEFT TESTIMONIAL CARD */}
      <div className="lg:col-span-1 bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center">

        <img
          src="/user.webp"
          className="w-24 h-24 rounded-full object-cover mb-4"
          alt="profile"
        />

        <h2 className="text-xl font-bold">Elsa Doe</h2>
        <p className="text-gray-500 text-sm">
          CEO & Founder Invision
        </p>

        <div className="text-pink-400 text-3xl mt-4">“</div>

        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* 🔴 RIGHT HERO BANNER */}
      <div className="lg:col-span-2 relative rounded-2xl overflow-hidden">

        <img
          src="/jacket-1.webp"
          className="w-full h-[400px] object-cover"
          alt="banner"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* content box */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 bg-white/80 backdrop-blur-md p-6 rounded-xl max-w-md">

          <span className="bg-black text-white text-xs px-3 py-1 rounded-md">
            25% DISCOUNT
          </span>

          <h2 className="text-2xl font-bold mt-3">
            Summer Collection
          </h2>

          <p className="text-gray-600 mt-2">
            Starting @ $20 Shop Now
          </p>

          <button className="mt-4 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
            Shop Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default Testimonial;