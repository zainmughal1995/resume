import React from "react";
import ProfileSectionDetails from "./ProfileSectionDetails";

const ProfileSection = () => {
  const profileDetails =
    "Experienced Web GIS Developer skilled in building interactive mapping applications. Open to leadership opportunities with a focus on project management and team coordination.";
  return (
    <>
      <ProfileSectionDetails
        sectionHeading="Profile"
        sectionDetails={profileDetails}
      />
    </>
  );
};

export default ProfileSection;
