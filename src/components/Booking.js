import React from "react";
import Footer from "../images/footer.png";

function Booking() {
  return (
    <div>
      {/* <img className="static w-screen h-[50%]" src={Footer}></img> */}
      <div
        className="w-screen p-20 no-repeat bg-cover"
        style={{ backgroundImage: `url(${Footer})` }}
      >
        <div className="">
          <p className="font1 text-start text-white">Make a reservation</p>
          <h1 className="font2 text-start text-white mb-5">
            Book your escape today
          </h1>
          <div className="flex flex-row justify-between bg-white divide-x p-5 ">
            <div className="p-5">
              <p className="font1 text-[#757575]">Arrival</p>
              <p className="font1 text-[#915437]">Select a day</p>
            </div>
            <div className="p-5">
              <p className="font1 text-[#757575]">Departure</p>
              <p className="font1 text-[#915437]">Select a day</p>
            </div>
            <div className="p-5">
              <p className="font1 text-[#757575]">Number of Guests</p>
              <p className="font1 text-[#915437]">2</p>
            </div>
            <div className="p-5">
              {" "}
              <button className="brownwhitebutton p-5 place-items-center font1">
                <div className="flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                  >
                    <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path>
                  </svg>
                  <div className="px-2"></div>
                  Book now
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-auto bg-[#9BB8D8]">
        <div className="flex flex-row">
          <div>
            <p className="font1 text-white text-start mx-20 my-10">Address</p>
            <h1 className="font2 text-white text-start mx-20 my-10">
              202 Main Street<br></br> Central Manchester
            </h1>
            <p className="font1 text-white text-start mx-20 my-10">
              Map and directions
            </p>
          </div>
          <div className="mr-20">
            <p className="font1 text-white text-start mx-20 my-10">Contacts</p>
            <h1 className="font2 text-white text-start mx-20 my-10">
              +44 77 000 0000 <br></br>
              info@orchidspa.com
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-between p-20">
          <p className="font1 text-white">© 2023 Orchid Spa – Legal</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button className=" p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                className="w-5 h-5 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg
                class="w-5 h-5 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
                color="white"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
