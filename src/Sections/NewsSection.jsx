import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import Card from "../Components/Card";
const NewsSection = () => {
  const boxRef = useRef();

  return (
    <div className="container h-screen w-[1280px]">
      <div className="flex items-center justify-center  mb-5">
        <h2 className="text-4xl">News</h2>
      </div>
      <div className="container h-[78vh]  grid grid-cols-2 ">
        <div className="bg-amber-400 grid-cols-1">
          <div className="flex flex-col gap-2.5 p-6">
            <div className=" mb-3">
              <div className="relative h-[240px] w-full overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://www.stanford.edu/wp-content/uploads/2025/04/20250324_Lauren_OConnell-2.jpg"
                  alt=""
                />
                <span className="absolute text-[28px] text-white bottom-0.5 p-2 shadow-2xs z-99">
                  <strong>Research Matters</strong> <br />
                  <p className="text-lg font-semibold">
                    ‘We need to understand how something works before we can
                    understand how it breaks’
                  </p>
                </span>
              </div>
            </div>
            <div className=" flex flex-row gap-4">
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
        <div className=" grid-cols-1">
          <div className="flex flex-col gap-2.5 p-7">
          <div className=" flex flex-row gap-4">
              <Card/>
              <Card/>
            </div>
            <div className="">
              <div className="relative h-[240px] w-full overflow-hidden rounded-md">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="https://www.stanford.edu/wp-content/uploads/2025/04/20250324_Lauren_OConnell-2.jpg"
                  alt=""
                />
                <span className="absolute text-[28px] text-white bottom-0.5 p-2 shadow-2xs z-99">
                  <strong>Research Matters</strong> <br />
                  <p className="text-lg font-semibold">
                    ‘We need to understand how something works before we can
                    understand how it breaks’
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
