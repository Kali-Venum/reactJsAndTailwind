import React from "react";
import Typed from "react-typed";
import Button from "./Button";

function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto text-center font-bold my-[100px]">
        <div className="text-xl md:text-3xl md:p-[24px]">Learn with us.</div>
        <div className="text-white text-3xl md:text-[80px] md:p-[24px]">
          Grow with us.
        </div>
        <div className="text-[20px] md:text-[50px] text-white md:p-[24px]">
          Learn
          <Typed
            className="pl-2"
            strings={[
              "Web Development.",
              "Digital Marketing.",
              "Ethical Hacking.",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop={true}
          />
        </div>
        <div>
          <Button styles="bg-black text-white p-3 rounded">Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
