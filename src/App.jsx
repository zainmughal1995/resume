import React from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import LeftProfile from "./components/LeftProfile";
import RightProfile from "./components/RightProfile";
import Certificates from "./components/Certificates";
function App() {
  return (
    <>
      <Header />
      <ProfileSection />
      <div className="sections w-[1000px] mx-auto flex">
        <LeftProfile />
        <RightProfile />
      </div>
      <Certificates />
    </>
  );
}

export default App;
