import React from "react";
import istLogo from "../imgs/ist-logo.jpg";
import Skill from "./Skill";
import arcmapLogo from "../imgs/arcmap.png";
import cssLogo from "../imgs/css.png";
import githubLogo from "../imgs/github.png";
import htmlLogo from "../imgs/html.png";
import nodeLogo from "../imgs/nodejs.png";
import postgresqlLogo from "../imgs/postgresql.png";
import pythonLogo from "../imgs/python.png";
import qgisLogo from "../imgs/qgis.png";
import reactLogo from "../imgs/react.png";

const LeftProfile = () => {
  return (
    <div className="left-profile w-[40%] py-9">
      <div className="education">
        <div className="title text-2xl text-blue-900 font-bold">Education</div>
        <div className="degree-details flex">
          <div className="image items-center justify-center">
            <img className="h-[90px] object-cover" src={istLogo} />
          </div>
          <div className="details">
            <div className="degree-title font-bold">
              Master of Science in Geographic Information Systems (GIS)
            </div>
            <div className="university-name italic">
              Institue of Space Technology, Islamabad
            </div>
            <div className="time-period">2020 - 2022</div>
            <div className="cgpa text-gray-500 font-bold">3.9 / 4.0</div>
          </div>
        </div>
      </div>

      {/* Skills section */}
      <div className="skills pt-7">
        <div className="title text-2xl text-blue-900 font-bold ">Skills</div>
        <Skill logo={arcmapLogo} title="ArcGIS" />
        <Skill logo={qgisLogo} title="QGIS" />
        <Skill logo={htmlLogo} title="HTML5" />
        <Skill logo={cssLogo} title="CSS3" />
        <Skill logo={githubLogo} title="Git/Github" />
        <Skill logo={pythonLogo} title="Python" />
        <Skill logo={nodeLogo} title="NodeJS" />
        <Skill logo={postgresqlLogo} title="PostgreSQL / PostGIS" />
        <Skill logo={reactLogo} title="ReactJS" />
      </div>
    </div>
  );
};

export default LeftProfile;
