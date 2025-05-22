import React, { useState } from "react";
import ProgramCard from "../Components/ProgramCard";

const Programs = () => {
  const tabs = ["Graduation", "Post-Graduation", "Diploma Programs", "Others"];
  const [activeTab, setActiveTab] = useState("Graduation"); // Default selected tab

  return (
    <div className="h-[80vh] w-full">
      <div className="flex items-center justify-center">
        <h2 className="font-extrabold text-4xl">Degree Programs</h2>
      </div>

      <div className="h-[80vh] w-full mt-16 flex flex-col items-center">
        <div className="flex flex-row justify-center items-center">
          {tabs.map((tab, idx) => (
            <button
              onClick={() => setActiveTab(tab)} // 👈 Fixed here
              className={`font-bold text-lg px-6 py-2 mx-1 cursor-pointer border-b-2 transition-all duration-300 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500"
              }`}
              key={idx}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-9 flex flex-wrap items-center justify-items-start w-[1380px] h-auto gap-4">
          {activeTab === "Graduation" && (
            <>
              <ProgramCard title="B.A. (Bachelor of Arts)" duration={"3 years"} icon="🎓" />
              <ProgramCard title="B.Sc. (Bachelor of Science)" duration={"3 years"} icon="🎓" />
              <ProgramCard title="B.Ed. (Bachelor of Education)" duration={"2 years"} icon="🎓" />
              <ProgramCard title="B.C.A. (Bachelor of Computer Application)" duration={"2 years"} icon="🎓" />
              <ProgramCard title="College of Arts and Sciences" icon="🎭" />
              <ProgramCard title="College of Arts and Sciences" icon="🎭" />
              <ProgramCard title="College of Arts and Sciences" icon="🎭" />
              <ProgramCard title="College of Arts and Sciences" icon="🎭" />
            </>
          )}
          {activeTab === "Post-Graduation" && (
            <>
              <ProgramCard title="M.A. (Master of Arts)" duration={"2 years"} icon="💼" />
              <ProgramCard title="M.Sc. (Master of Science)" duration={"2 years"} icon="💼" />
              <ProgramCard title="Graduate School of Business" icon="💼" />
              <ProgramCard title="Graduate School of Business" icon="💼" />
              <ProgramCard title="Graduate School of Business" icon="💼" />
              <ProgramCard title="Graduate School of Business" icon="💼" />
              <ProgramCard title="Graduate School of Business" icon="💼" />
            </>
          )}
          {activeTab === "Diploma Programs" && (
            <>
              <ProgramCard title="D.El.Ed (Diploma in Elementary Education)" duration={"2 years"} icon="💻" />
              <ProgramCard title="Diploma in Yoga Education" icon="🧘" />
              <ProgramCard title="Diploma in Yoga Education" icon="🧘" />
              <ProgramCard title="Diploma in Yoga Education" icon="🧘" />
              <ProgramCard title="Diploma in Yoga Education" icon="🧘" />
            </>
          )}
          {activeTab === "Others" && (
            <>
              <ProgramCard title="Certificate in Spoken English" icon="🗣️" />
              <ProgramCard title="Certificate in Spoken English" icon="🗣️" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Programs;
