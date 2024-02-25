import React from "react";

export const Certficate = (props) => {
  return (
    <div className="certificate flex items-center border px-7 m-2 gap-9 w-[1000px] mx-auto">
      <div className="thumbnail">
        <img
          className="w-[130px] shadow shadow-md shadow-gray-700 m-2 hover:scale-150 duration-300"
          src={props.img}
        ></img>
      </div>
      <div className="publisher p-3 text-3xl font-bold uppercase">
        {props.publisher}
      </div>
      <div className="caption text-2xl italic">{props.title}</div>
    </div>
  );
};
