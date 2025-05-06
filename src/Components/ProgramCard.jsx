import React from 'react'

const ProgramCard = ({ icon, title, duration }) => (
  <div className="bg-white h-[150px] w-[300px] shadow-md rounded-lg p-2 text-center flex flex-col items-center gap-1">
    <span className="text-5xl">{icon}</span>
    <p className="font-semibold">{title}</p>
    <p className="font-semibold">Duration: {duration}</p>
  </div>
);
  

export default ProgramCard
