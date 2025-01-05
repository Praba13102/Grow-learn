import React from "react";
import design from "./assets/tableplant.jpg";
import Navbar from "./Navbar";
import Courses,{Recom, Picks} from "./Courses";
import Footer from "./Footer";

const Banner = () => {
 
 
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="colu-1 col-lg-6 col-md-6 col-sm-6 justify-content-center d-flex">
            <h1 className="lh-2 auto fw-semibold mb-4">Grow your skills, define your future</h1>
            <p className="lh-2 mb-4">
              Presenting Academy, the tech school of the future. We teach you
              the right skills to be prepared for tomorrow.
            </p>
            <div className="d-flex">
              <button className=" me-3 border-0">EXPLORE COURSES</button>
              <button className=" border-0">LEARN MORE</button>
            </div>
          </div>
          <div className="colu-2 col-lg-6 col-md-6 col-sm-6">
            <div className="banner-img">
              <img src={design} alt="banner" />
            </div>
          </div>
        </div>
        <h2 className="blue auto fw-bold mb-3">What to learn next</h2>
        <h4 className="fw-bold mb-3">Recommended for you</h4>
        <Courses />
        <h4 className="fw-bold mb-3">Top Picks for you</h4>
        <Picks />
        <h4 className="fw-bold mb-3">Personalized Recommendations</h4>
        <Recom />
        
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Banner;
