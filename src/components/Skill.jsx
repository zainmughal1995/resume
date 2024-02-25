import React from "react";

const Skill = (props) => {
  return (
    <>
      <div className="skill-with-logo flex gap-3  w-[200px]  m-1 items-center justify-center">
        {" "}
        <div className="skill-logo w-[20%]">
          <img className="object-cover" src={props.logo} />
        </div>
        <div className="skill-title  text-center w-[70%]">{props.title}</div>
      </div>
    </>
  );
};

export default Skill;
