import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./flight.css";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
function Flightlist() {
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
  const CityList = [
    {
      label: "Bengalore to Bagdogra",
    },
    {
      label: "Bagdogra to Delhi",
    },
    {
      label: "Kolkata to Mumbai ",
    },
    {
      label: "Guwahati to Goa",
    },
    {
      label: "Delhi to Bagdogra",
    },
  ];

  return (
    <>
      <h1 className="heading-tag d-flex mt-3 mb-3">
        <p className="tag">
          {" "}
          Web Check-in mandatory ,Follow all guidelines before reaching Airport
        </p>{" "}
        <p className="updt">UPDATES</p>
      </h1>
      <div className="ms-5 me-5">
        <h3 className="heading-tag2 d-flex">
          <GiCommercialAirplane className="text-secondary" />{" "}
          <span className=" ms-3 me-3">Our Sectors</span>
          <DropdownButton
            title={city ? city : "Select Sector"}
            id="select-media-box"
            onSelect={(e) => setCity(e)}
          >
            {CityNameImage.map((el, i) => (
              <Dropdown.Item eventKey={el.label} className="p-2 mt-0 " key={i}>
                {el.label}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </h3>
        <div className="flight-list  my-3 pb-2 rounded-bottom-3">
          <>
            <h6 className="p-2 ps-2 flight-list-heading rounded-top-3">
              Deprature Sector <MdFlightTakeoff className="flt" />
            </h6>
            <div className="row">
              <div className="col-6">
                {CityList.map((el, i) => (
                  <h4 key={i}>
                    {" "}
                    {el.label}{" "}
                    <button className="float-end"> Search Flight</button>{" "}
                  </h4>
                ))}
              </div>
              <div className="col-6">
                {CityList.map((el, i) => (
                  <h4 key={i}>
                    {" "}
                    {el.label}{" "}
                    <button className="float-end"> Search Flight</button>{" "}
                  </h4>
                ))}
              </div>
            </div>
          </>
          <>
            <h6 className="p-2 ps-2 flight-list-heading ">
              Arival Sectors
              <MdFlightLand className="flt ms-2" />
            </h6>
            <div className="row">
              <div className="col-6">
                {CityList.map((el, i) => (
                  <h4 key={i}>
                    {" "}
                    {el.label}{" "}
                    <button className="float-end"> Search Flight</button>{" "}
                  </h4>
                ))}
              </div>
              <div className="col-6">
                {CityList.map((el, i) => (
                  <h4 key={i}>
                    {" "}
                    {el.label}{" "}
                    <button className="float-end"> Search Flight</button>{" "}
                  </h4>
                ))}
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}

export default Flightlist;
