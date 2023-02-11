import React, { useState } from "react";
import "./header.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { BiRefresh } from "react-icons/bi";

import {MdFlightTakeoff,MdFlightLand} from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
const Header = () => {
    const [Start, setStart] = useState(new Date());
  const [city, setCity] = useState("");
  const CityNameImage = [
    {
      label: "Bengalore",
    },
    {
      label: "Bagdogra",
    },
    {
      label: "Kolkata",
    },
    {
      label: "Guwahati",
    },
    {
      label: "Delhi",
    },
  ];

  return (
    <section className="inn-page-bg ">
      <div className="container">
        <div className="row">
          <div className="inn-pag-ban p-0">
            <div className="ps-5 pe-5 ">
              <span className="float-end border-0 sss">Logout</span>
              <span className="float-end sss">Contact us</span>
              <span className="float-end sss">Online Reacharge</span>
              <span className="float-end sss">Credit Request</span>
            </div>

            <div className="brand-logo ">
              <div className="row ps-5 pe-5 w-100  pt-0 ">
                <div className="col-md-6 p-0">
                  <img src="./../fly-logo.png" alt="logo" className="logo " />
                </div>
                <div className="col-md-6 p-0">
                  <h6 className=" m-0 float-end ">
                    Welcome - Go FlySmart Holidays Pvt Ltd{" "}
                    <span> (AID4876)</span>{" "}
                  </h6>
                  <h6 className=" m-0 float-end mt-2">
                    <BiRefresh /> Credit balance : <span> 1,45,000/-</span>{" "}
                    Balance <span> 1,45,000/-</span>
                  </h6>
                  <h6 className=" m-0 float-end mt-2  buttons">
                    {" "}
                    <button>Hot Deals</button>
                    <button className="ms-2">My Account</button>
                  </h6>
                </div>
              </div>
            </div>

            <div className="search-container m-5 rounded-2 ">
              <h5 className="text-light">Booking Your Flight</h5>
              <div className="">
                <span className="float-end text-light me-2 pb-1 s-btn">
                  {" "}
                  <input type="checkbox" className="me-1" />
                  Direct Flight
                </span>
                <span className=" p-1 pb-1 f-btn">Domestic</span>
                <span className=" me-3 p-1 f-btn ">International</span>
                <span className="text-light me-3 pb-1 s-btn">
                  {" "}
                  <input type="checkbox" className="me-1 " /> Oneway
                </span>
                <span className="text-light me-3 pb-1 s-btn">
                  {" "}
                  <input type="checkbox" className="me-1" />
                  Round Trip
                </span>
                <span className="text-light  pb-1 s-btn">
                  {" "}
                  <input type="checkbox" className="me-1" />
                  Multicity
                </span>
              </div>
              <div className="search-container-detail p-4">
                <div className="row">
                  <div className="col">

                  <h6 className="flt-text">From <MdFlightTakeoff className="flt"/></h6>
                    <DropdownButton
                      title={city ? city : "Bengalore (BLR)"}
                      id="select-media-box"
                      onSelect={(e) => setCity(e)}
                    >
                      {CityNameImage.map((el, i) => (
                        <Dropdown.Item
                          eventKey={el.label}
                          className="p-2 mt-0 "
                          key={i}
                        >
                          {el.label}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </div>
                  <div className="col">
                  <h6 className="flt-text">Where To  <MdFlightLand className="flt"/></h6>
                    <DropdownButton
                      title="City or Airport?"
                      id="select-media-box"
                      onSelect={(e) => setCity(e)}
                    >
                      {CityNameImage.map((el, i) => (
                        <Dropdown.Item
                          eventKey={el.label}
                          className="p-2 mt-0 "
                          key={i}
                        >
                          {el.label}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </div>   
                  <div className="col">
                  <h6 className="flt-text">Deprature</h6>
                  <div   id="select-media-box" className="isop" >
                  <p className=" ps-2 mt-2 d-flex" >
                    {moment(Start).format("DD/MM/YYYY")} 
                    <Dropdown className="p-0 icon-position">
                    <Dropdown.Toggle
                      variant="transparent"
                      className="p-0 m-0"
                    >
                     <FaCalendarAlt className="calender-logo me-1" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Calendar
                        value={Start}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                   
                  </p>
             
                </div>
                  </div>
                  <div className="col">
                  <h6 className="flt-text">Deprature</h6>
                  <div   id="select-media-box" className="isop" >
                  <p className=" ps-2 mt-2 d-flex" >
                    {moment(Start).format("DD/MM/YYYY")} 
                    <Dropdown className="p-0 icon-position">
                    <Dropdown.Toggle
                      variant="transparent"
                      className="p-0 m-0"
                    >
                     <FaCalendarAlt className="calender-logo me-1" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Calendar
                        value={Start}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                   
                  </p>
             
                </div>
                  </div>
                  <div className="col">
                  <h6 className="flt-text">Traveller & Class</h6>
                    <DropdownButton
                      title="1 Adult,Economy"
                      id="select-media-box"
                      onSelect={(e) => setCity(e)}
                    >
                      {CityNameImage.map((el, i) => (
                        <Dropdown.Item
                          eventKey={el.label}
                          className="p-2 mt-0 "
                          key={i}
                        >
                          {el.label}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </div>
                  <h6 className="text-center "> <button className="search">SEARCH</button></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
