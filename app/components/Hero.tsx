"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    speed: 400,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.webp",
      title: "Trending Items",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
      button: "Shop Now",
    },
    {
      id: 1,
      img: "/banner-2.webp",
      title: "Trending Accessories",
      mainTitle: "Trending Accessories",
      price: "$15",
      button: "Shop Now",
    },
    {
      id: 2,
      img: "/banner-3.webp",
      title: "Sales Offer",
      mainTitle: "New fashion summer sale",
      price: "$30",
      button: "Shop Now",
    },
  ];

  return (
    <div className="pt-6 lg:pt-0 ">
      <Slider {...settings}>
        {slideData.map((item) => (
          <div key={item.id}>
            <div className="relative w-full h-[500px]">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="w-full h-full object-cover"
              />

              <div className="absolute left-30 top-1/2 -translate-y-1/2 z-20 ">
                <h4 className="text-lg mb-5 uppercase">{item.title}</h4>
                <h2 className="text-2xl font-bold">{item.mainTitle}</h2>
                <p className=" text-3xl font-bold mt-2 mb-5"><span className="text-[20px] text-gray-400">Starting at</span> {item.price}</p>
                <button className="bg-[#FF8F9C] text-black px-4 py-3 rounded-md hover:bg-gray-800 transition font-medium text-white ">{item.button}</button>

              </div>
            </div>
          </div>
          
        ))}

      </Slider>
    </div>
  );
};

export default Hero;