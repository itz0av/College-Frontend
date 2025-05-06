import React from "react";

const ImageCard = ({
  imgSrc = "https://www.stanford.edu/wp-content/uploads/2025/04/BIO25Q_edited_blur.png",
  Heading,
  About = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
}) => {
  return (
    <div>
      <div className="container flex flex-col h-auto w-[50] shadow-2xl overflow-hidden rounded-2xl">
        <img className="object-cover " src={imgSrc} alt="" />
        <span className="bg-white  scrollbar-hide flex flex-col gap-1 p-3">
          <strong>{Heading}</strong>
          <p>{About}</p>
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
