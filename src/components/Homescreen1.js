import React from "react";
import Banner from "./Banner";
import spaMainPage from "../images/spaMainImage2.png";
import footMassage from "../images/footMassage.png";

function Homescreen1() {
  return (
    <div
      className="h-screen w-screen bg-top-right brightness-90 "
      style={{ backgroundImage: `url(${spaMainPage})` }}
    >
      <Banner />
      <div className="h-[5%]"></div>
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col w-[60%]">
            <h1 className="text-[14px] text-[#363B60] font2 text-start ml-20 drop-shadow-md">
              A luxury spa hotel in the heart of Manchester
            </h1>
            <button
              // datatype="calender.svg"
              className="font1 text-[#363B60] font-semibold border-[#363B60] border-2 p-5 ml-20 mt-5 w-[30%] hover:bg-white hover:text-[#915437] fill-white hover:fill-[#915437]"
            >
              <div className="flex flex-row">
                <svg
                  className="stroke-[#363B60]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path d="M6.75 0a.75.75 0 0 1 .75.75V3h9V.75a.75.75 0 0 1 1.5 0V3h2.75c.966 0 1.75.784 1.75 1.75v16a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-16C1.5 3.784 2.284 3 3.25 3H6V.75A.75.75 0 0 1 6.75 0ZM21 9.5H3v11.25c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25Zm-17.75-5a.25.25 0 0 0-.25.25V8h18V4.75a.25.25 0 0 0-.25-.25Z"></path>
                </svg>{" "}
                <div className="p-1"></div>
                Book a room
              </div>
            </button>
          </div>
          {/* <div className="w-[10%]"></div> */}
          <div className="relative w-[25%] grid mx-20 ">
            <img
              className="p-5 rounded-sm"
              src={footMassage}
              alt="white building in the sun"
            ></img>
            <button className="absolute bottom-0 left-0 font1 text-white pb-10 pl-5 w-full ml-2">
              {" "}
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  className="m-1"
                  fill="white"
                >
                  <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
                <div className="p-1"></div>
                Discover Our Treatments
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homescreen1;
