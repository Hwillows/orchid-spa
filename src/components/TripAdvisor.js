import React from "react";
import Logolight from "../images/logolight.png";
import Header3 from "../images/header3.png";

function TripAdvisor() {
  return (
    <div>
      <div
        className="bg-no-repeat bg-center w-screen"
        style={{ backgroundImage: `url(${Logolight})` }}
      >
        <div className="static w-screen p-5">
          <h1 className="font2 mt-20">
            “Some places are so good to stay in, you don’t<br></br> want to
            generate a rush on them. Hotel<br></br> Garofano in Positano is one
            of them.”
          </h1>{" "}
          <p className="font1 text-[#915437] place-self-center pt-10">
            Melissa - Trip Advisor
          </p>{" "}
          <div className="grid justify-items-center ">
            <img
              className="relative w-screen mt-20"
              src={Header3}
              alt="Looking out to some boats on the sea"
            ></img>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default TripAdvisor;
