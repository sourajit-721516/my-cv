import { LanguageList } from "../../utils/LanguageList";
import React from "react";
import Fade from "react-reveal/Fade";
import "./Language.css"
const Language = () => {
  return (
    <>
      <div className="container Language" id="Language">
        
          <h2 className=" col-12 mt-3 mb-1 text-left ">
            Language & Scripting Language
          </h2>
          <hr />
          
        
        <div className="row">
          {LanguageList.map((lang) => (
            <Fade left>
              <div key={lang._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <lang.icon className="lang-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{lang.name}</h5>
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

export default Language;
