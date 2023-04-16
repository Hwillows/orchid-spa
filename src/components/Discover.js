import React from "react";
import Mountainsea from "../images/mountainsea.png";
import Buildingsea from "../images/buildingsea.png";
import Tablesea from "../images/tablesea.png";
import Header4 from "../images/header4.png";

function Discover() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-[50%] m-20">
          <div className=" text-start">
            <p className="font1 text-[#915437]">Discover Postiano</p>
            <h1 className="font2 ">
              You’re never more than a few minutes away from the vineyards &
              beaches of Italy.
            </h1>
          </div>
          <p className="font1 ml-20 mt-10 text-start leading-loose">
            Positano regularly appears at the top of “Best City in the World”
            lists, and for many good reasons. Nowhere else will you find natural
            grandeur, picture-perfect destinations, culinary adventures, and
            urban energy in such close proximity. There is so much to see and do
            in Positano, and we hope you’ll give yourself enough time to revel
            in it.
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
                Disover Postiano
              </div>
            </button>
          </div>
        </div>
        <div className="max-w-[30%] my-10 mr-20">
          <img
            className="w-full  "
            src={Mountainsea}
            alt="white building in the sun"
          ></img>
        </div>
      </div>
      <div className="flex flex-row justify-between place-items-center m-20">
        <img
          className="w-[40%]"
          src={Buildingsea}
          alt="Looking out to sea, building across costline"
        ></img>
        <img
          className="w-[30%]"
          src={Tablesea}
          alt="View from white table looking over sea"
        ></img>
      </div>
      <div className="flex flex-row">
        <div className="w-[50%] ml-20">
          {" "}
          <p className="font1 text-[#915437] text-start mb-4">
            Kick back and put your feet up
          </p>
          <h1 className="font2 text-start">
            Discover astonishing<br></br> views of the rugged<br></br> natural
            landscape.
          </h1>
        </div>
        <div className="w-[50%] place-items-left">
          <p className="font1 mr-30 mb-5 text-start text-[#383838] leading-loose mr-20">
            Hotel Garofano features a shared outdoor relaxation area with sun
            loungers, wet lounge, braai area, solar-heated saltwater infinity
            pool, and a well-stocked honesty bar for when you feel like getting
            out and about with other guests. Our philosophy is that a gorgeous
            sunset is best when shared.
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
                Things to do
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
