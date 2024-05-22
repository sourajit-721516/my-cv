import { FrameworkList } from "../../utils/FrameworkList";
import React from "react";

import Fade from "react-reveal/Fade";
import "./Framework.css"
const Framework = () =>{
    return(
        <>
        <div className="container Framework" id="Framework">
        
          <h2 className="col-12 mt-3 mb-1 text-left ">
            Framework
          </h2>
          <hr />
          
        
        <div className="row">
          {FrameworkList.map((frame) => (
            <Fade left>
              <div key={frame._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <frame.icon className="frame-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{frame.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
        </>
    );
};

export default Framework;