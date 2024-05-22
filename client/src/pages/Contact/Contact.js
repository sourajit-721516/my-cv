import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
// import Rotate from "react-reveal/Rotate";
// import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("PLease Provide all fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  {/* <LightSpeed> */}
                    <div className="leftbox">
                      <h3>Email :</h3>

                      <span>
                        <div className="mail">ghoshgobinda56@gmail.com</div>
                        <a
                          className="btn-m"
                          href="mailto: ghoshgobinda56@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MdEmail size={30} />
                        </a>
                      </span>
                    </div>
                    <div className="leftbox">
                      <h3>Phone & Whatsapp :</h3>
                      <span>
                        {" "}
                        <div className="no">+91-7679959188</div>
                        <a
                          className="btn-w"
                          href="http://wa.me/+917679959188"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaWhatsapp size={30} />
                        </a>
                      </span>
                    </div>
                    <div className="leftbox">
                      <h3>Profile :</h3>

                      <div className="contact-icon">
                        <a
                          className="btn-l"
                          href="https://www.linkedin.com/in/ghoshsourajit/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedinIn size={30} />
                        </a>
                        <a
                          className="btn-y"
                          href="https://www.linkedin.com/in/ghoshsourajit/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaYoutube size={30} />
                        </a>
                        <a
                          className="btn-l"
                          href="https://www.linkedin.com/in/ghoshsourajit/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF size={30} />
                        </a>
                        <a
                          className="btn-g"
                          href="https://www.linkedin.com/in/ghoshsourajit/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsGithub size={30} />
                        </a>
                        <a
                          className="btn-le"
                          href="https://www.linkedin.com/in/ghoshsourajit/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiLeetcode size={30} /> 
                        </a>
                        <a
                          className="btn-i"
                          href="https://www.linkedin.com/in/ghoshsourajit/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram size={30} />
                        </a>
                      </div>
                    </div>
                  {/* </LightSpeed> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              {/* <Rotate> */}
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <BsGithub color="black" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
              {/* </Rotate> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
