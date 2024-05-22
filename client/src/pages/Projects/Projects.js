import React from "react";
import "./Projects.css";
// import {Swiper,SwiperSlide} from 'swiper/react';
// import Spin from "react-reveal/Spin";
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import{EffectCoverflow,Pagination,Navigation} from 'swiper/modules';
// import { arrow-forward-outline } from 'react-ionicons'

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
        Hello, Sir/Madam. Here are my top recent projects based on React.js. For more details, please visit my GitHub profile.
        </p>
        {/* card design */}
        <div className="row" id="ads">
         
          
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://www.google.com/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            
            
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mobile App</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>

                  <span className="card-detail-badge">Sass</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Food Recipe app</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/sourajit-721516/mealdb-food-recipe-app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            
           
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Job Portal</h5>
                  </div>
                  <a className="ad-btn" href="https://www.google.com/">
                    View
                  </a>
                </div>
              </div>
            </div>
            


            
        </div>
      </div>
    </>
  );
};

export default Projects;
