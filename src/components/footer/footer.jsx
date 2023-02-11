import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-contain mt-5">
      <h6 className="p-2">
        {" "}
        Subscribe to our NewsLetter and get all updatts!
        <span className="offset-3">
          <input placeholder="E-mail id" className="me-2" />
         <button>  Subscribe</button>
        </span>
      </h6>
      <div className="row  ms-5 me-5">
          <div className="col p-0">
          <div className="quick-links ">
              <h4 className="f-heading">COMPANY</h4>
              <ul className="position-relative  pt-1 ps-0">
                <li className="">
                
                    About Us
                
                </li>
                <li className="">
                
                 
                   GST Details{" "}
              
                </li>
                <li className="">
              
                   Career
                
                </li>
               
              </ul>
            </div>
          </div>
          <div className="col  p-0 ">
            <div className="quick-links ">
              <h4 className="   f-heading">OUR SERVICES</h4>
        
            </div>
          </div>
          <div className="col   p-0">
          <div className="quick-links ">
              <h4 className="   f-heading">POLICIES & TERMS</h4>
              <ul className="position-relative  pt-1 ps-0">
                <li className="">
                
                   CRS Policy
                
                </li>
                <li className="">
                
                 
                   Privacy Policy
              
                </li>
                <li className="">
              
                    Terms use
                
                </li>
                <li className="">
                
               Payment
            
                </li>
           
              </ul>
            </div>
          </div>
          <div className="col   p-0">
          <div className="quick-links ">
              <h4 className="   f-heading">AIRLINES WE DEAL</h4>
              <ul className="position-relative  pt-1 ps-0">
                <li className="">
                
                    Indigo
                
                </li>
                <li className="">
                
                 
                   GoAir in
              
                </li>
                <li className="">
              
                    Spicejet
                
                </li>
                <li className="">
                GoFirst
            
                </li>
           
              </ul>
            </div>
          </div>
          
          </div>
    </div>
  );
};

export default Footer;
