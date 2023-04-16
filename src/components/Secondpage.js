import React from "react";
import Logolight from "../images/logolight.png";
import Header2 from "../images/header2.png";
import Whitebuilding from "../images/whitebuilding.png";

function Secondpage() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-left  w-screen"
        style={{ backgroundImage: `url(${Logolight})` }}
      >
        <div className="static w-screen p-5">
          <p className="font1 text-[#915437] place-self-center pt-10">
            Welcome to Hotel Garofano
          </p>{" "}
          <h1 className="font2">
            Hotel Garofano is a wonderful place from<br></br> which to enjoy the
            simple pleasures of <br></br>Positano & the spectacular Amalfi
            Coast.
          </h1>{" "}
          <button className="p-5 font1 w-auto mt-10 whitebrownbutton">
            <div className="flex flex-row">
              <svg
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
          <div className="grid justify-items-center mx-20">
            <img
              className="relative m-20"
              src={Header2}
              alt="Looking out to some boats on the sea"
            ></img>
          </div>
          <div className="flex flex-row">
            <div className="w-[50%] grid justify-items-center">
              <div className="relative h-[60%]">
                <img
                  className="w-full h-full "
                  src={Whitebuilding}
                  alt="white building in the sun"
                ></img>

                <button className="absolute bottom-0 left-0 font1 text-white m-5">
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
                    <div className=" p-1"></div>
                    Our Suites
                  </div>
                </button>
              </div>
            </div>
            <div className="static w-[50%]">
              <div className="">
                <p className="font1 text-[#915437] text-start">
                  About Hotel Garofano
                </p>
                <h1 className="font2 text-start mr-20">
                  Every element of your experience has been highly considered
                  throughout
                </h1>
              </div>
              <p className="font1 text-start mx-20 mt-5 leading-loose text-[#383838">
                Hotel Garofano is a luxury Hotel in the stunning Positano, a
                cliffside village on southern Italy’s Amalfi Coast. Named after
                the popular italian flower, the Carnation, Hotel Garofano was
                designed with incredible attention to detail, every element of
                your experience has been highly considered throughout, blending
                history.
              </p>
              <div className="h-2"></div>
              <div className="flex flex-row mt-10 ml-20">
                <button className="font1 border-black p-4 whiteblackbutton">
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
                    Learn more about us
                  </div>
                </button>
                <button className="font1 p-4 whiteblackbutton border-white">
                  {" "}
                  <div className="flex flex-row">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M6.75 0a.75.75 0 0 1 .75.75V3h9V.75a.75.75 0 0 1 1.5 0V3h2.75c.966 0 1.75.784 1.75 1.75v16a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-16C1.5 3.784 2.284 3 3.25 3H6V.75A.75.75 0 0 1 6.75 0ZM21 9.5H3v11.25c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25Zm-17.75-5a.25.25 0 0 0-.25.25V8h18V4.75a.25.25 0 0 0-.25-.25Z"></path>
                    </svg>
                    <div className="p-1"></div>
                    Start a project
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Secondpage;
