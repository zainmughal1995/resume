import React from "react";
import WorkExperience from "./WorkExperience";

const RightProfile = () => {
  return (
    <div className="right-profile w-[60%] py-9 px-[60px]">
      <div className="experience">
        <div className="work-experience-heading text-2xl text-blue-900 font-bold">
          Experience
        </div>
        <WorkExperience
          title="Geographic Information Systems Analyst"
          place="Zoneomics, Pakistan"
          time="October 2022 - January 2024"
        />
        <WorkExperience
          title="Geographic Information Systems Developer"
          place="Kaspar Consulting Services, South Africa"
          time="July 2020 - September 2021"
        />
        <WorkExperience
          title="Research Intern"
          place="Space Systems Lab, Institute of Space Technology"
          time="June 2019 - September 2019"
        />
      </div>
      <div className="projects">
        <div className="projects-heading text-2xl text-blue-900 font-bold">
          Projects
        </div>
        <div className="projects-list">
          <ul className="list-disc">
            <li>
              Habitat Suitability Analysis using Sentinel-2 Satellite Imagery
              and Global Biodiversity Information Facility GBIF data using
              maximum entropy algorithm on Google Earth Engin
            </li>
            <li>
              Suitability Analysis for Installing Solar Power Plant in Islamabad
              using Multicriteria Evaluation on Landsat Satellite Imagery
            </li>
            <li>
              Impact assessment of Hydropower plant on Kullu Block, Kullu
              District, Himachal, India using Land Cover Classification and Land
              Use LCCLU from 1992 to 2019
            </li>
            <li>
              Digitization of Lithuania, Anyskciai to visualize socio-economic
              dynamics of the country on a map
            </li>
            <li>
              QGIS Plugin : Dashboard for telecom company for drive test data
            </li>
            <li>
              {" "}
              QGIS Plugin : Automate the entire QA process at Zoneomics to apply
              all required checks
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightProfile;
