import React from "react";
import { Certficate } from "./Certficate";
import arcgis1 from "../imgs/arcgis-1.png";
import arcgis2 from "../imgs/arcgis-2.png";
import arcgis3 from "../imgs/arcgis-3.png";
import arcgis4 from "../imgs/arcgis-4.png";
import arcgis5 from "../imgs/arcgis-5.png";
import arcgis6 from "../imgs/arcgis-6.jpg";
import arcgis7 from "../imgs/arcgis-7.jpg";
import arcgis8 from "../imgs/arcgis-8.jpg";
import coursera1 from "../imgs/coursera-1.png";
import coursera2 from "../imgs/coursera-2.jpg";
import coursera3 from "../imgs/coursera-3.jpeg";
import coursera4 from "../imgs/coursera-4.jpeg";
import webgis1 from "../imgs/webgis-1.jpg";

const Certificates = () => {
  return (
    <div className="certificates w-[1000px] mx-auto">
      <div className="certificates-heading text-2xl text-blue-900 font-bold">
        Certiciates
      </div>
      <div className="certificates-list">
        <Certficate
          img={webgis1}
          publisher={"ISNET & SUPARCO"}
          title={
            "Web GIS and Spatial Database Development using Free and Open Source Software"
          }
        />

        <Certficate
          img={arcgis1}
          publisher={"ESRI"}
          title={"ArcGIS Online Basics"}
        />
        <Certficate
          img={arcgis2}
          publisher={"ESRI"}
          title={"Exploring GIS Maps"}
        />
        <Certficate
          img={arcgis3}
          publisher={"ESRI"}
          title={"Getting Started with Spatial Analysis"}
        />
        <Certficate
          img={arcgis4}
          publisher={"ESRI"}
          title={"Using GIS to Solve Problems"}
        />
        <Certficate img={arcgis5} publisher={"ESRI"} title={"Cartography"} />
        <Certficate
          img={arcgis6}
          publisher={"ESRI"}
          title={"Getting Started with GIS"}
        />
        <Certficate
          img={arcgis7}
          publisher={"ESRI"}
          title={"Python for Everyone"}
        />
        <Certficate
          img={arcgis8}
          publisher={"ESRI"}
          title={"Spatial Data Science: The New Frontier In Analytics"}
        />

        <Certficate
          img={coursera1}
          publisher={"Coursera"}
          title={"GIS Data Acquision and Map Design"}
        />
        <Certficate
          img={coursera2}
          publisher={"Coursera"}
          title={"Introduction to GIS Mapping"}
        />
        <Certficate
          img={coursera3}
          publisher={"Coursera"}
          title={"Introduction to Python"}
        />
        <Certficate
          img={coursera4}
          publisher={"Coursera"}
          title={"Python Geospatial Data Analysis"}
        />
      </div>
    </div>
  );
};

export default Certificates;
