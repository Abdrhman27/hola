import React from 'react';
import { Link } from 'react-router-dom';
import WomanImg from "../img/woman_hero.png";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24 relative -top-4">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="uppercase font-semibold flex items-center">
            <div className="w-10 h-[2px] bg-red-500 mr-3"/>
            <div>New Trend</div>
          </div>
          <h1 className="uppercase text-[70px] leading-[1.1] font-light">Autmn Sale  Stylish <br />
          <span className="font-semibold">Womens</span>
          </h1>
          <Link to='/' className="self-start uppercase font-semibold border-b-2 border-primary">Discover More</Link>
        </div>
        <div>
          <img src={WomanImg} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
