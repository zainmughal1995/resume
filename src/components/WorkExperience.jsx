import React from "react";

const WorkExperience = (props) => {
  return (
    <div className="m-3 py-2">
      <div className="work-title font-bold text-xl p-1">{props.title}</div>
      <div className="work-place italic">{props.place}</div>
      <div className="work-time font-bold text-gray-500">{props.time}</div>
    </div>
  );
};

export default WorkExperience;
