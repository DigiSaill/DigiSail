import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Import the icon
import "./Spaces.css";
import CupSvg from "../SmallComponents/CupSvg";
import BarSVG from "../SmallComponents/BarSVG";
import SpaceStageOne from "./SpaceStageOne/SpaceStageOne";

const Spaces = ({ toggleCenter }) => {
  return (
    <div className="SpacesComponent">
      <div className="spacesDymanicCol">
        <div className="row d-flex" style={{ margin: 0 }}>
          <div className="SpacesCheckbox" style={{ width: "7%" }}>
            <Checkbox
              style={{ marginRight: 8, color: "white", height: "30px" }}
            />
          </div>
          <div className="SpaceWord">
            <span>Spaces</span>
          </div>
          <div className="SpacesCupSvg">
            <CupSvg />
          </div>
        </div>
        <div className="row SpacesLowerHead">
          <div className="SpacesLowerHeadItem">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className="SpacesLowerHeadItem">
            <BarSVG />
          </div>
          <div className="SpacesLowerHeadItem">3/1</div>
          <div className="SpacesLowerHeadItem">
            <CupSvg />
          </div>
          <div className="SpacesLowerHeadItem">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </div>
      <SpaceStageOne toggleCenter={toggleCenter}/>
      <SpaceStageOne />
      <SpaceStageOne />
    </div>
  );
};

export default Spaces;
