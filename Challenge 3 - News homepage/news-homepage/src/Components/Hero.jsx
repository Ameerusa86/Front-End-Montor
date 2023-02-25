import React from "react";
import web3image from "../images/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    // eslint-disable-next-line
    <div className="mt-6 w-[1440px] h-full grid grid-cols-[980px_minmax(900px,_1fr)_100px] gap-9">
      <div className="left-side">
        <div className="image-container">
          <img src={web3image} alt="" />
        </div>
        <div className="text-container grid grid-cols-2">
          <h1 className="text-6xl font-bold font-Inter  w-[400px] mt-6">
            The Bright Future of web 3.0?
          </h1>
          <div>
            <p className="mt-6 font-Inter text-xl">
              we dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="bg-soft-red w-[180px] h-[50px] mt-9 text-lg tracking-widest	font-Inter text-Off-white">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="right-side w-[400px] h-full bg-Very-dark-blue p-4">
        <h1 className="text-soft-orange text-3xl font-[700] font-Inter p-8">
          New
        </h1>
        <div>
          <h3 className="text-Off-white font-bold tracking-widest px-8">
            Hydrogen VS Electric Cars
          </h3>
          <p className="text-Off-white px-8 mt-4 tracking-widest">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <div className="border-[1px] w-[350px] ml-auto mr-auto mt-6 border-Dark-grayish-blue rounded-md"></div>
        </div>
        <div>
          <h3 className="text-Off-white font-bold tracking-widest px-8 mt-8">
            The Downsides of AI Artistry
          </h3>
          <p className="text-Off-white px-8 mt-4 tracking-widest">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <div className="border-[1px] w-[350px] ml-auto mr-auto mt-6 border-Dark-grayish-blue rounded-md"></div>
        </div>
        <div>
          <h3 className="text-Off-white font-bold tracking-widest px-8 mt-8">
            Is VC Funding Drying Up?
          </h3>
          <p className="text-Off-white px-8 mt-4 tracking-widest">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
