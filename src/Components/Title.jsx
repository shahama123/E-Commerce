
import React from "react";

const Title = ({ text1, text2, description }) => {
  return (
    <div className="mt-10">
      <div className="flex justify-center items-center gap-2">
        <p className="flex text-gray-500 gap-2 ">
          {text1}
          <span className="text-slate-700">{text2}</span>
        </p>
        <p className="w-8 h-[2px] bg-gray-700 font-bold "></p>
      </div>
      <div>
        <p className="text-center mt-5 text-lg text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default Title;
