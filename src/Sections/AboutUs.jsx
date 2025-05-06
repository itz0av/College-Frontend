import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
  return (
    <div>
      {/* <div><h2>About Us</h2></div> */}
      <div className="flex flex-col items-center w-screen">
        <div className="grid grid-cols-3 w-[1280px] h-2/3">
          <div className="col-span-2 p-8   justify-center items-center">
            <div className="flex flex-col p-8">
              <div className="items-center flex flex-col ">
                <h1 className="text-blue-700 font-bold text-4xl px-24 ">
                  About us
                </h1>
              </div>
              <div className="text-4xl py-8">
                <h2>
                  We're {"  "}
                  <span className="font-bold text-red-500">
                    <Typewriter
                      words={[
                        "Affordable.",
                        "Excellence.",
                        "Accessible",
                        "Innovating.",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={120}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[18px]">
                  {" "}
                  <b>Established in 2006,</b> <br />SJ
                  Mahavidyalaya was founded with the vision of making quality
                  higher education accessible and affordable, especially for
                  students in semi-urban and rural areas. Over the years, it has
                  grown into a hub of academic excellence, character-building,
                  and holistic student development. We offer a wide array of
                  undergraduate programs in Arts, Science, Commerce, and
                  Education, tailored to meet the evolving needs of students and
                  society. SJ Mahavidyalaya nurtures
                  responsible citizens who are ready to face real-world
                  challenges.
                </p>
                <div>
                  <div className="flex justify-center gap-20 py-10 text-center">
                    <div className="flex flex-col items-center space-y-5 max-w-xs">
                      {/* <i className="fas fa-signs-post text-5xl text-red-600 drop-shadow-lg"></i> */}
                      <i class="fa-solid fa-book-open text-5xl text-red-600 drop-shadow-lg"></i>
                      <p className="text-md">Offers a <br />
                        <strong>
                        Diverse Academic <br /> Programs
                        </strong>
                      </p>
                    </div>

                    {/* Box 2 */}
                    <div className="flex flex-col items-center space-y-4 max-w-xs">
                      {/* <i className="fas fa-link text-5xl text-red-600 drop-shadow-lg"></i> */}
                      <i class="fa-solid fa-graduation-cap text-5xl text-red-600 drop-shadow-lg"></i>
                      <p className="text-md"><strong className="text-lg">98%  </strong><br />Final-Year Result<br />
                      in the 2024 Batch
                
                      </p>
                    </div>

                    {/* Box 3 */}
                    <div className="flex flex-col items-center space-y-4 max-w-xs">
                      {/* <i className="fas fa-globe text-5xl text-red-600 drop-shadow-lg"></i> */}
                      <i class="fa-solid fa-building-columns text-5xl text-red-600 drop-shadow-lg"></i>
                      <p className="text-md">
                      facilities aim to provide 
                      <br /> <strong> A holistic learning </strong>
                        
                        <br />
                        environment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-1 flex items-center justify-center ">
            <div className="h-2/3 w-[356px] rounded-3xl overflow-clip border-4 border-gray-400/35 shadow-2xl/55 ">
              <img
                src="https://www.tamiu.edu/_cascade/blocks/common/newLook/together-at/passion.jpg"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
