import React from "react";
import "./About.css";
// import Jump from "react-reveal/Jump";
// import img1 from "./assets/my.jpeg";
const About = () => {
  // const imagePath = 'src/assets/my.jpeg';
  return (
    <>
      {/* <Jump> */}
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="./image/iam.jpeg"
                 alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              
              <p>
              I am a highly motivated individual with a passion for problem-solving and a
commitment to excellence. As a fresher, I am excited to bring my enthusiasm and
fresh perspective to your team. I am eager to learn and grow in my career, and I
am confdent that my hard work and dedication will be an asset to your organization.
I am a quick learner and a team player, and I am excited to contribute my skills to
your organization and take on new challenges.
              </p>
              <p className="hero"><h3  className="hero">OBJECTIVE : </h3>To use my skills in the best possible way for achieving the organization’s goals.</p>
            </div>
          </div>
        </div>
      {/* </Jump> */}
    </>
  );
};

export default About;
