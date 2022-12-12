import React from "react";
import "./ItemsStyle.css";
import Item from "./Hospital.json";
import Navbar from "../components/Navbar";
function Hospital() {
  return (
    <div className="Hospital">
      <h3>Hospital Page</h3>
      <Navbar />
      <div className="HospitalCardSection">
        <div className="ContainerItm">
          <div className="CardsItm">
            {Item.map((Item) => {
              return (
                <div className="CardLinkItm">
                  <div className="CardItm">
                    <h6 className="">{Item.HospitalName}</h6>
                    <h6 className="">{Item.MblNumbr}</h6>
                  </div>
                  <div className="FontCallIcon">
                    <a href="#">
                      {" "}
                      <i className={Item.FontawsomeIconItm}></i>{" "}
                    </a>

                    {/* <i className="fa-solid fa-square-phone-flip"></i> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hospital;
