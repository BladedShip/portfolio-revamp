"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const StartProvider = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {props.children}
      <div className="flex overflow-clip w-[8rem] shadow-md">
        <button className="p-2 flex items-center justify-center gap-2 text-white font-medium text-[18px] bg-gradient-to-b from-[#60A35E] to-[#338035] italic font-sans pr-4">
          <div className="relative w-[30px] h-[28px]">
            <Image
              src="/icons/windows.png"
              fill
              alt="Start Image"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          <p>Start</p>
        </button>
        <CurveVector />
      </div>
    </>
  );
};

export default StartProvider;

const CurveVector = () => {
  return (
    <svg
      width="8"
      height="46"
      viewBox="0 0 8 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 46C4.41828 46 8 35.7025 8 23C8 10.2975 4.41828 0 0 0V46Z"
        fill="url(#paint0_linear_3241_210)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3241_210"
          x1="4"
          y1="0"
          x2="4"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#60A35E" />
          <stop offset="1" stop-color="#338035" />
        </linearGradient>
      </defs>
    </svg>
  );
};
