import React from "react";
import hotstone from "../images/hotstone.png";
import footmassage from "../images/footMassage.png";
function History() {
  return (
    <div>
      <div>
        <div className=" grid justify-items-center m-20">
          <img
            className="w-[50%]"
            src={hotstone}
            alt="Looking out to some boats on the sea"
          ></img>
        </div>
      </div>{" "}
      <div className="flex flex-row">
        <div className="w-[50%] grid justify-items-center">
          <div className="relative h-[40%] mb-20 ">
            <img
              className="w-full h-full "
              src={footmassage}
              alt="white building in the sun"
            ></img>
            <div className="absolute"></div>
          </div>
        </div>
        <div className="static w-[50%]">
          <div className="">
            <p className="font1 text-[#915437] text-start">Our History</p>
            <h1 className="font2 text-start my-10 mr-20 text-[#363B60]">
              Orchid Spa has been open since 2015. First located in Trafford and
              moved to Central Manchester in 2022
            </h1>
          </div>
          <p className="font1 text-start mx-20 mb-5">
            Every element of your experience has been highly considered
            throughout, blending a relaxed & contemporary design. The hotel
            speaks for elegance and sopistication, with hints of culture and
            history throughout, its stunning building speaks for itself.
          </p>
          <div className="h-2"></div>
          <div className="flex flex-row">
            <button className="font1 border-black whiteblackbutton p-4 ml-20 mb-20">
              {" "}
              <div className="flex flex-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  className="m-1"
                >
                  <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path>
                </svg>
                <div className="p-1"></div>
                Our history
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
