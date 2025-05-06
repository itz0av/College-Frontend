import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Logo from "../assets/SJ.png"

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef();
  const navShadow = useRef();
  useGSAP(() => {
    gsap.to(navRef.current, {
      backgroundColor: "#f4f4f4",
      color: "#000",
      height: "5vh",
      duration: 1,
      scrollTrigger: {
        trigger: navRef.current,
        scroller: "body",
        start: "top top",
        end: "top -10%",
        scrub: true,
        // markers: true, // Uncomment to debug
      },
    });
  }, []);
  useGSAP(() => {
    gsap.to(navShadow.current, {
      display: "none",
      duration: 0.1,
      scrollTrigger: {
        trigger: navShadow.current,
        scroller: "body",
        start: "top top",
        end: "top -10%",
        scrub: true,
        markers: true, // Uncomment to debug
      },
    });
  });

  return (
    <div>
      <div
        ref={navRef}
        className="fixed top-0 left-0 w-full flex items-center justify-center py-6 px-8 z-99 bg-transparent transition-all duration-500 text-white drop-shadow-md"
      >
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto font-semibold">
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10"
              src={Logo}
              alt="Logo"
            />
            {/* <img
              className="w-10 h-10"
              src="https://play-lh.googleusercontent.com/Jk3XeLyQe0fyQoz2rK6TiLiLFtemt5hRidgCSfSBwJQUQ9q_Ju2xWa-WbUiMft33iang=w480-h960"
              alt="Logo"
            /> */}
            <h1 className="text-lg">SJ Mahavidyalaya</h1>
          </div>
          <div className="flex gap-8 cursor-pointer">
            {["News", "Event", "Academics", "Admission", "About Us", "💻"].map(
              (item, idx) => (
                <a key={idx} className="relative group text-inherit">
                  <span className="after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full">
                    {item}
                  </span>
                </a>
              )
            )}
          </div>
        </div>
        <div
          ref={navShadow}
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80 h-svh pointer-events-none -z-10"
        />
      </div>
      {/* Just a dummy spacer so you can scroll
      <div className="h-[200vh] bg-gray-100 pt-[15vh]">
        <p className="text-center text-xl mt-20">Scroll to see Navbar effect</p>
      </div> */}
      
    </div>
  );
};

export default Navbar;

// after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 group-hover:after:w-full
