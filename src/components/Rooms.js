import React from "react";
import Classic from "../images/room1.png";
import Deluxe from "../images/room2.png";
import Luxury from "../images/room4.png";
import Penthouse from "../images/room3.png";

function Rooms() {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div>
      <div className="bg-[#9BB8D8] w-screen">
        <div className="h-10"></div>
        <div className="flex flex-row justify-between mx-20">
          <h2 className="font2 text-white">Our Rooms & Suites</h2>
          {/* sliding buttons */}
          <div>
            <button onClick={slideLeft} className="m-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="white"
              >
                <path d="M7.78 12.53a.75.75 0 0 1-1.06 0L2.47 8.28a.75.75 0 0 1 0-1.06l4.25-4.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L4.81 7h7.44a.75.75 0 0 1 0 1.5H4.81l2.97 2.97a.75.75 0 0 1 0 1.06Z"></path>
              </svg>
            </button>
            <button onClick={slideRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="white"
              >
                <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="relative flex items-center">
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide mx-20"
          >
            <div className="relative w-[400px] inline-block p-2 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300 ">
              <img
                className="static brightness-75 hover:brightness-90 drop-shadow-md"
                src={Classic}
                alt="Classic Suite"
              ></img>
              <div className="absolute bottom-0 left-0 w-[100%] drop-shadow-md ">
                <div className="flex flex-row ">
                  <div className="p-5 ">
                    <h3 className=" font2 text-white">Classic Suite</h3>

                    <p className="font1 text-white">70m² 2 Adults</p>
                  </div>{" "}
                  <div>
                    <button className="rounded-full border-white border-2 p-2 ml-5 mt-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="white"
                      >
                        <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[400px] inline-block p-2 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <img
                className="static brightness-75 hover:brightness-90 drop-shadow-md"
                src={Deluxe}
                alt="Deluxe Suite"
              ></img>
              <div className="absolute bottom-0 left-0 w-[100%] drop-shadow-md ">
                <div className="flex flex-row ">
                  <div className="p-5 ">
                    <h3 className="font2 text-white">Deluxe Suite</h3>
                    <p className="font1 text-white">100m² 2 Adults, 1 Child</p>
                  </div>
                  <div>
                    <button className="rounded-full border-white border-2 p-2 ml-5 mt-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="white"
                      >
                        <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[400px] inline-block p-2 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <img
                className="static brightness-75 hover:brightness-90 drop-shadow-md"
                src={Luxury}
                alt="Luxury Suite"
              ></img>
              <div className="absolute bottom-0 left-0 w-[100%] drop-shadow-md ">
                <div className="flex flex-row ">
                  <div className="p-5 ">
                    <h3 className="font2 text-white">Luxury Suite</h3>
                    <p className="font1 text-white">110m² 2 Adults, 2 Child</p>
                  </div>
                  <div>
                    <button className="rounded-full border-white border-2 p-2 ml-5 mt-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="white"
                      >
                        <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-[400px] inline-block p-2 m-5 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <img
                className="static brightness-75 hover:brightness-90 drop-shadow-md"
                src={Penthouse}
                alt="Penthouse Suite"
              ></img>
              <div className="absolute bottom-0 left-0 w-[100%] drop-shadow-md ">
                <div className="flex flex-row ">
                  <div className="p-5 ">
                    <h3 className="font2 text-white ">Penthouse</h3>
                    <p className="font1 text-white">120m² 4 Adults, 1 Child</p>
                  </div>
                  <div>
                    <button className="rounded-full border-white border-2 p-2 ml-5 mt-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="white"
                      >
                        <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <p className="font1 text-white mx-20 text-start pb-20">
          All of our rooms come with an en suite, complimentray breakfast and a
          sauna.
        </p>
      </div>
    </div>
  );
}

export default Rooms;
