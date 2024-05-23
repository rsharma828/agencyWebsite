import React from "react";
import { HomePageText } from "../containers/Home/data";

import {
    AiOutlineRocket,
    AiOutlineRise,
    AiOutlineMail,
    
  } from "react-icons/ai";


const Features = ({ header, subheader, subheader1 }) => {

    return( <div>
    <div className="container">
        <div className="header-section mt-5 pt-5">
            <h6>{HomePageText.subheader1}</h6>
            <h1>{HomePageText.header} </h1>
            <p>{HomePageText.subheader}</p>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box">
                    <AiOutlineRise className="icon1" />
                    <h4>{HomePageText.services_title1}</h4>
                    <p>{HomePageText.services_subheading}</p>
                    <button className="btn learn-more-btn hover:text-white">Learn More</button>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box">
                    <AiOutlineRocket className="icon2" />
                    <h4>{HomePageText.services_title2}</h4>
                    <p>{HomePageText.services_subheading}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                </div>
            </div>

            <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box">
                    <AiOutlineMail className="icon3" />
                    <h4>{HomePageText.services_title3}</h4>
                    <p>{HomePageText.services_subheading}</p>
                    <button className="btn learn-more-btn">Learn More</button>
                </div>
            </div>
        </div>
    </div>
        </div >
    )
}

export default Features;