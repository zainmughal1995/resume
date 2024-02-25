import React from "react";

const ProfileSectionDetails = (props) => {
  return (
    <>
      <div className="w-[1000px] mx-auto mt-[100px]">
        {" "}
        <h1 className="text-2xl text-blue-900 font-bold">
          {props.sectionHeading}
        </h1>
        <p className="text-lg">{props.sectionDetails}</p>
      </div>
    </>
  );
};

export default ProfileSectionDetails;
