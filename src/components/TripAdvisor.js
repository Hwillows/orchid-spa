import React from "react";
import Header3 from "../images/manchestersky.png";

function TripAdvisor() {
  return (
    <div>
      <div>
        <div className="static w-screen p-5">
          <h1 className="font2 mt-20 text-[#363B60]">
            “I loved my weekend break at Orchid Spa,<br></br> I have already
            booked my next weekend break here.”
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
