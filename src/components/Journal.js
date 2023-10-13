import React from "react";
import Journal1 from "../images/reflexology.png";
import Journal2 from "../images/event.png";
import Journal3 from "../images/roomservice.png";

function Journal() {
  return (
    <div className="bg-[#9BB8D8] w-screen">
      <div className="">
        <p className="flex justify-start font1 text-[#915437] pt-20 ml-20 mb-5">
          From our
        </p>
        <div className="flex flex-row justify-between">
          <h1 className="font2 ml-20 text-[#363B60]">Journal</h1>
          {/* <p className="font1 text-[#915437] mr-20">View all articles</p> */}
          <button className="font1 text-[#915437] mr-20">
            View all articles
          </button>
        </div>
        <div className="relative flex items-center">
          <div
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            <div className="inline-block p-2 m-20 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <img
                className="w-[519px] h-[366px]"
                src={Journal1}
                alt="Journal1"
              ></img>

              <p className="font1 text-[#915437] "># Treatments</p>
              <h3 className="!text-[39px] text-[#363B60] font2">
                Orchid Spa now has Reflexology
              </h3>
            </div>
            <div className="w-[350px] inline-block p-2 m-20 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <img
                className="w-[519px] h-[366px]"
                src={Journal2}
                alt="Journal 2"
              ></img>
              <p className="font1 text-[#915437]"># Events</p>
              <h3 className="!text-[39px] font2 text-[#363B60]">
                How to plan your event
              </h3>
            </div>
            <div className="w-[350px] inline-block p-2 m-20 cursor-pointer hover:scale-105 ease-in-out duration-300">
              <img
                className="w-[519px] h-[366px]"
                src={Journal3}
                alt="Journal 3"
              ></img>
              <p className="font1 text-[#915437]"># Food</p>
              <h3 className="!text-[39px] font2 text-[#363B60]">
                Room Service
              </h3>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Journal;
