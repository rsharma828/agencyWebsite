import React from "react";
import { HomePageText } from "../containers/Home/data";
import  aboutus  from "../assets/Images/about-us.jpg";


const About = () => {
    return (
        <div className="abouthome">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12 pt-5">
                <img src={aboutus} className="img-fluid mt-5 pt-5 imgChange" alt="aboutus" />
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="abouthome">
                  <h6 className="mt-3">{HomePageText.about_subheader}</h6>
                  <h4 className="mt-3">{HomePageText.about_header}</h4>
                  <p className="mt-3 text-justify">{HomePageText.about_des1}</p>
                  <p className="text-justify">{HomePageText.about_des2}</p>

                  <button className="btn readmore mt-3">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
};

export default About;