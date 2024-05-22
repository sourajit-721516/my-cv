import { DbmsList } from "../../utils/DbmsList";
import React from "react";

import Fade from "react-reveal/Fade";
import "./Dbms.css";
const Dbms = () =>{
    return(

        <>

      <div className="container Dbms" id="Dbms">
          <h2 className="col-12 mt-3 mb-1 text-left ">
            DBMS & VCS
          </h2>
          <hr />
          
        
        <div className="row">
          {DbmsList.map((db) => (
            <Fade left>
              <div key={db._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <db.icon className="db-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{db.name}</h5>
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

}

export default Dbms;