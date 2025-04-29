import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen relative flex flex-col md:flex-row items-center">
      <div className="left flex text-center md:text-left justify-center h-full px-4 lg:px-16 xl:px-24 w-full md:w-1/2 flex-col gap-4 md:gap-6 lg:gap-8 z-10 py-8 md:py-12 lg:py-20 xl:py-24">
        <h1 className="text-blue-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase font-bold tracking-wide">
          fitness club
        </h1>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono space-y-1 sm:space-y-2 lg:space-y-3">
          <h2 className="font-semibold">Sweat, Smile</h2>
          <h2 className="font-semibold">and Repeat</h2>
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-md lg:max-w-lg xl:max-w-xl">
          Check Out the Most Effective Exercises Personalized for You
        </p>
        <Button
          className="w-fit px-6 sm:px-8 py-4 sm:py-6 md:px-12 lg:px-16 mx-auto md:mx-0 text-base sm:text-lg lg:text-xl font-semibold hover:scale-105 transition-transform"
          variant="destructive"
        >
          Explore Exercises
        </Button>
      </div>
      <div className="right z-10 flex items-end justify-end w-full md:w-1/2">
        <img
          className="w-full md:rounded-bl-[400px]  md:w-3/4 lg:w-2/3 xl:w-3/4 h-[50vh] sm:h-[400px] md:h-full object-cover object-center"
          src="/blendBoard.png"
          alt="Fitness Training"
          loading="eager"
        />
      </div>
      <h1 className="absolute text-blue-600 md:block bottom-0 text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] opacity-20">Excercises</h1>
    </div>
  );
};

export default Hero;