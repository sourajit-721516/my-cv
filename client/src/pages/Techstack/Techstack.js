import React from "react";
import "./Techstack.css";
// import RubberBand from "react-reveal/RubberBand";
// import Fade from "react-reveal/Fade";
// import { TechstackList } from "../../utils/TechstackList";
import Language from "./Language";
import Framework from "./Framework";
import Dbms from "./Dbms";
const Techstack = () => {
  return (

 <>
<div className="heading"><h1 className="col-12 mt-3 mb-1 text-center text-uppercase">Technical Skills</h1></div>

<div className="tstack" id= "techstack">
      
      <Language></Language>

      <Framework></Framework>

      <Dbms></Dbms>
    </div>
</> 

    
  );
};

export default Techstack;
