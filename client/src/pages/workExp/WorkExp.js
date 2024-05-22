import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img1 from "./image/img1.png";
// import img2 from "./image/img2.png";
import { Certificates } from "../../utils/Certificates";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
    <div className="head"><h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Certificates
        </h2>
        <hr /></div>
      <div className="work"id="work" >
      <Carousel
        infiniteLoop
        autoPlay={true}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={1000}
      >
      {Certificates.map((cr) => (
        
        <div className="container work-exp pic" >
          
          <img  key={cr._id} src={cr.item} alt="Item1" />
          <p className="legend">{cr.des}</p>
        </div>
        
      
       ))
       }
        
      </Carousel>
        {/* <Carousel
        infiniteLoop
        autoPlay={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        interval={1000}
      >
        <div className="pic">
          <img src="./image/img1.png" alt="Item1" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div className="pic">
          <img src="./image/img2.png" alt="Item3" />
          <p className="legend">Peer-to-peer Support</p>
        </div>
      </Carousel> */}

       
        </div>
      
    </>
  );
};

export default WorkExp;
