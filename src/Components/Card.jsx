import React from "react";

const Card = () => {
  return (
    <div>
      <div className="container flex flex-col h-[300px] w-[50] shadow-2xl overflow-hidden">
        <img
          className="object-cover "
          src="https://www.stanford.edu/wp-content/uploads/2025/04/20250324_Lauren_OConnell-2.jpg"
          alt=""
        />
        <span className="bg-white overflow-scroll scrollbar-hide flex flex-col gap-1 p-3">
          <strong>Heading</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            distinctio, nesciunt amet ea saepe aspernatur optio hic cursor
          </p>
        </span>
      </div>
    </div>
  );
};

export default Card;
