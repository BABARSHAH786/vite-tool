import * as React from "react";

import Image from "next/image";
// import Link from "next/link";
export default function SecTop() {
  return (
    <div className="w-[1440px ]  ">
      <div className=" h-11 max-ss:h-[90px] bg-[#f5f5f5] ">
        <p className="font-medium text-[15px] text-center  ">Hello Nike App</p>
        <p className="text-center max-ss:w-[310px ] max-ss:h-[45px] ">
          Download the app to access everything Nike. Get Your Great
        </p>
      </div>
      <div className="w-[1344px ] h-[970px] ">
        <Image
          className="w-[1244px ] h-[700px] max-ss:w-[310px ] max-ss:h-[235px] "
          src={"/Image.png"}
          alt="shoes"
          width={1344}
          height={700}
        />

        <div className="w-[1008px ] h-[229px] max-sm:h-auto mt-[28px] ">
          <p className="font-medium text-[15px] text-center  ">First Look</p>

          <h1 className=" font-medium  text-center mt-5 text-[56px] leading-[64px] ">
            Nike Air Max Pulse
          </h1>
          <p className=" w-[311px ] font-medium text-[15px] mt-5 text-center  ">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse
            <br />
            —designed to push you past your limits and help you go to the max.
          </p>

          {/* btn */}
          <div className="max-ss:px-[10px] text-white py-1 max-ss:ml-[25px] mt-5 px-[379px] gap-2 flex ">
            <button className="max-ss:ml-[25px] w-[110px ]  ml-[250px] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">
              Notify Me
            </button>
            <button className="w-[110px ] h-[39px] bg-[#111111] rounded-[30px] py-[7px] px-[22px]  ">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}



