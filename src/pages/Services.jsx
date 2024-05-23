import { HomePageText } from "../containers/Home/data"
import React from "react"

import {
    AiOutlineNotification,
    AiOutlineFileSearch,
    AiOutlineTeam,
    AiOutlineSync,
    AiOutlineFundView,
    AiOutlineProject,
  } from "react-icons/ai";
  

const Services = () => {
    return (
        <div className="serviceshome">
          <div className="container">
            <div className="servicesheader">
              <h6>{HomePageText.serviceshome_subheader}</h6>
              <h4>{HomePageText.serviceshome_header}</h4>
              <p>{HomePageText.serviceshome_subheader1}</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineNotification className="icon1" />
                  <h4>{HomePageText.services_box_title1}</h4>
                  <p>{HomePageText.services_box_des}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFundView className="icon2" />
                  <h4>{HomePageText.services_box_title2}</h4>
                  <p>{HomePageText.services_box_des}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineFileSearch className="icon3" />
                  <h4>{HomePageText.services_box_title3}</h4>
                  <p>{HomePageText.services_box_des}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineTeam className="icon3" />
                  <h4>{HomePageText.services_box_title4}</h4>
                  <p>{HomePageText.services_box_des}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineProject className="icon2" />
                  <h4>{HomePageText.services_box_title5}</h4>
                  <p>{HomePageText.services_box_des}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-6">
                <div className="services-box-home m-3">
                  <AiOutlineSync className="icon1" />
                  <h4>{HomePageText.services_box_title6}</h4>
                  <p>{HomePageText.services_box_des}</p>
                  <button className="btn learn-more-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
};

export default Services;