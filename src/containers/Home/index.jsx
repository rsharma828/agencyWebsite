import React from "react";
import Slideshow from "../../components/Slideshow";
import "./style.css";
import Features from "../../pages/Features"
import About from "../../pages/About"
import Services from "../../pages/Services"
import Team from "../../pages/Team"
import Pricing from "../../pages/Pricing"
import Testimonial from "../../pages/Testimonial";


function Home({ header, subheader, subheader1 }) {
  return (
    <div>
      <section>
        
        <Slideshow />
        {/* Features  */}
        <Features/>
        {/* Header 2  about */}
        <About/>

        {/* Header 3 services */}
        <Services/>

        {/* Header 4 test */}
        <Testimonial/>

        {/* Header 5 team */}
        <Team/>

        {/* header 6 price */}
        <Pricing/>
        
      </section>
    </div>
  );
}

export default Home;
