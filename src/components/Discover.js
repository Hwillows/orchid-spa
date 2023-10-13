import React from "react";
import pub from "../images/manchesterpub.png";
import bar from "../images/bar.png";
import shops from "../images/shops.png";

function Discover() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-[50%] m-20">
          <div className=" text-start">
            <p className="font1 text-[#915437]">Discover Manchester</p>
            <h1 className="font2 text-[#363B60]">
              You are only a walk away from lots of great places in Manchester
            </h1>
          </div>
          <p className="font1 ml-20 mt-10 text-start leading-loose">
            The staff are very knowledgeable on the local area and would love to
            give you recommendations on places to go. There are plenty of
            resturants, bars and activities within a 10 minute walk. The tram is
            a 5 minute walk away, that can link you all over Greater Manchester.
          </p>{" "}
          <div className="h-2"></div>
          <div className="flex flex-row">
            <button className="font1 p-4 ml-20 mt-10 whitebrownbutton">
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
                Disover Manchester
              </div>
            </button>
          </div>
        </div>
        <div className="max-w-[30%] my-10 mr-20">
          <img
            className="w-full rounded-lg"
            src={pub}
            alt="white building in the sun"
          ></img>
        </div>
      </div>
      <div className="flex flex-row justify-between place-items-center m-20">
        <img
          className="w-[40%]"
          src={bar}
          alt="Looking out to sea, building across costline"
        ></img>
        <img
          className="w-[30%]"
          src={shops}
          alt="View from white table looking over sea"
        ></img>
      </div>
      <div className="flex flex-row">
        <div className="w-[50%] ml-20">
          {" "}
          <p className="font1 text-[#915437] text-start mb-4">
            Kick back and put your feet up
          </p>
          <h1 className="font2 text-[#363B60] text-start">
            Discover the benefits<br></br>of massage with natural<br></br>
            essencial oils.
          </h1>
        </div>
        <div className="w-[50%] place-items-left">
          <p className="font1 mr-30 mb-5 text-start text-[#383838] leading-loose mr-20">
            Orchid Spa features a shared heated rooftop pool and rooftop bar, a
            luxurious indoor pool, a sauna and steam room, and break out lounge
            rooms with unlimited supply of herbal teas
          </p>{" "}
          <div className="h-2"></div>
          <div className="flex flex-row">
            <button className="font1  p-4 whitebrownbutton">
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
                View Gallery
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
