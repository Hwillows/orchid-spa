import React from "react";
import orchidlogo from "../images/orchidlogo.png";

function Banner() {
  return (
    <div className="h-[30%]">
      <div className="flex flex-row justify-between">
        {/* div containing menu bar and language setting */}
        <div className="pl-20 pt-10">
          {/* menu bar */}
          <div className="flex flex-row">
            <div>
              <div className="flex flex-row">
                <button>
                  <svg
                    className="stroke-[#363B60]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="white"
                  >
                    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                  </svg>
                </button>

                {/* Language button */}

                <button
                  type="button"
                  className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-[#363B60]"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  English
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    fill="white"
                    className="stroke-[#363B60]"
                  >
                    <path d="M13.03 8.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.47 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018l2.97 2.97V3.75a.75.75 0 0 1 1.5 0v7.44l2.97-2.97a.75.75 0 0 1 1.06 0Z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* div containing logo */}
        <div className="grid justify-items-stretch">
          <img
            className="h-[30%] w-auto justify-self-center"
            src={orchidlogo}
            alt="logo"
          ></img>
        </div>
        {/* calender button */}
        <div className="static">
          <div
            className="static h-20 w-20 bg-[#DCCFBF] grid grid-cols-1"
            color="#DCCFBF"
          >
            <button className="absolute place-self-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#915437"
              >
                <path d="M6.75 0a.75.75 0 0 1 .75.75V3h9V.75a.75.75 0 0 1 1.5 0V3h2.75c.966 0 1.75.784 1.75 1.75v16a1.75 1.75 0 0 1-1.75 1.75H3.25a1.75 1.75 0 0 1-1.75-1.75v-16C1.5 3.784 2.284 3 3.25 3H6V.75A.75.75 0 0 1 6.75 0ZM21 9.5H3v11.25c0 .138.112.25.25.25h17.5a.25.25 0 0 0 .25-.25Zm-17.75-5a.25.25 0 0 0-.25.25V8h18V4.75a.25.25 0 0 0-.25-.25Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
