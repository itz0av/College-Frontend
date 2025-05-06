import React from "react";

const ReviewCard = ({name, rating, review}) => {
  return (
    <div className="w-[400px] h-[230px] flex flex-col gap-3 border-4 border-white bg-gray-300 inset-shadow-2xs shadow-md rounded-3xl p-4 overflow-hidden">
        <div className="flex flex-row gap-4 items-center pl-4">
            <span className="w-[50px] h-[50px] rounded-full bg-blue-600 overflow-hidden items-center justify-center ">Profile</span>
            <span className="pl-3">
                <h2> <strong>{name}</strong></h2>
                <span><strong>Rating:</strong>{rating}</span>
            </span>

        </div>
        <p className="text-md overflow-hidden pl-5 pr-1">
            {review}
        </p>
    </div>
  );
};

export default ReviewCard;
