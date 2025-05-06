import React from "react";
import Carousel from "../Components/Carousel";
// import images from "../assets/SJ_logo.png";
const HeroSection = () => {
  const heroImages =[
    // "https://www.tamiu.edu/videos/fall-2023.mp4",
    "https://plus.unsplash.com/premium_photo-1682098120982-6d2bb64f64a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/9572509/pexels-photo-9572509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1682098120982-6d2bb64f64a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683887034145-228645f2e685?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721231564051-3b44b8058a9e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ]
  return (
    <div className="lg:h-screen  w-screen">
        <div
          className=" flex  items-center z-0 transition-transform ease-out duration-500 w-full"
        >
          <Carousel autoslide={true} autoslideInterval={3500}>
            {...heroImages.map((images) =>(
              <img className="object-cover" src={images} alt="Images" />
            ))}
          </Carousel>

        </div>
    </div>
  );
};

export default HeroSection;


