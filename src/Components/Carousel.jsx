import React, { useState, useEffect } from "react";

// import {CheveronLeft,CheveronRight } from "react-feather"
const Carousel = ({
  children: slides,
  autoslide = false,
  autoslideInterval ,
}) => {
  const [curr, setCurr] = useState(0);

  const pre = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  useEffect(()=>{
    if(!autoslide)return
      const slideInterval = setInterval(next, autoslideInterval)
    return ()=> clearInterval(slideInterval);
  },[])
  return (
    <div className=" w-full h-[100vh] sm:h-[70vh] md:h-[100vh] overflow-hidden relative z-50 outline">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>

      <div className="absolute flex inset-0 items-center justify-between z-[9999]">
        <button
          onClick={pre}
          className="bg-white flex px-3.5 py-3.5 rounded-full font-bold m-7 cursor-pointer hi"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={next}
          className="bg-white flex px-3.5 py-3.5 rounded-full font-bold m-7 cursor-pointer"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 ">
        <div className=" flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`transition-all w-1.5 h-1.5 rounded-full ${
                curr === i ? "p-1 bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
