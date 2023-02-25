import React from "react";
import RetroPC from "../images/image-retro-pcs.jpg";
import Keyboard from "../images/image-top-laptops.jpg";
import Gaming from "../images/image-gaming-growth.jpg";

const Footer = () => {
  return (
    <div className="mt-10 grid grid-cols-3 w-[1440px]">
      <div className="w-[455px] h-[200px] grid grid-flow-row-dense grid-cols-2 gap-8">
        <div>
          <img src={RetroPC} alt="" className="w-full h-full" />
        </div>
        <div className="text py-4 col-span-">
          <h1 className="text-4xl text-gray-400 font-bold">01</h1>
          <br />
          <h2 className="text-2xl font-bold ">Reviving Retro PCs</h2>
          <p className="text-lg">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="w-[455px] h-[200px] grid grid-flow-row-dense grid-cols-2 gap-8">
        <div>
          <img src={Keyboard} alt="" className="w-full h-full" />
        </div>
        <div className="text py-4 col-span-">
          <h1 className="text-4xl text-gray-400 font-bold">02</h1>
          <br />
          <h2 className="text-2xl font-bold ">Top 10 Laptops of 2022</h2>
          <p className="text-lg">
            Our best picks for varios needs and budgets.
          </p>
        </div>
      </div>
      <div className="w-[455px] h-[200px] grid grid-flow-row-dense grid-cols-2 gap-8">
        <div>
          <img src={Gaming} alt="" className="w-full h-full" />
        </div>
        <div className="text py-4 col-span-">
          <h1 className="text-4xl text-gray-400 font-bold">03</h1>
          <br />
          <h2 className="text-2xl font-bold ">The Growth of Gaming</h2>
          <p className="text-lg">
            How the pandamic has sparked fresh opprtunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
