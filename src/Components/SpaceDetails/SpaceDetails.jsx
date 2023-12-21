import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Import the icon
import "../Spaces/Spaces.css";
import CupSvg from "../SmallComponents/CupSvg";
import BarSVG from "../SmallComponents/BarSVG";
import Popover from "@mui/material/Popover";
import Grid from "@mui/material/Grid";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const SpaceDetails = ({ setColumnLayout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="SpacesComponent" style={{ overflowY: "auto" }}>
      <div className="spacesDymanicCol">
        <div className="row d-flex" style={{ margin: 0 }}>
          <div
            style={{ width: "90%", height: "40px" }}
            className="d-flex justify-content-betwen align-items-center"
          >
            <span
              style={{
                padding: " 0px 10px",
                backgroundColor: "gray",
                borderRadius: "10px",
              }}
            >
              Avaibable
            </span>
          </div>
          <div className="SpacesCupSvg">
            <CloseIcon
              onClick={() => {
                setColumnLayout(6);
              }}
            />
          </div>
        </div>
      </div>
      <Grid container>
        <Grid xs={12} className="d-flex justify-content-center py-3">
          <button
            style={{
              backgroundColor: "#FFABAB",
              border: "none",
              padding: "0.3rem 0.4rem",
              borderRadius: "15px",
            }}
          >
            <AddAPhotoIcon />
            Take a Photo
          </button>
        </Grid>
      </Grid>
      <div
        style={{
          width: "95%",
          backgroundColor: "#E0E0E0",
          margin: "Auto",
          textAlign: "center",
        }}
      >
        <span>Sixth of October</span>
      </div>
      <Grid
        container
        style={{
          width: "95%",
          border: "1px solid #CACACA",
          margin: "Auto",
          textAlign: "center",
        }}
        className="my-2"
      >
        <Grid xs={6} style={{ borderRight: "1px solid #E0E0E0" }}>
          New Giza Development
        </Grid>
        <Grid xs={6}>New Giza</Grid>
      </Grid>
      <div
        style={{
          width: "95%",
          backgroundColor: "#E0E0E0",
          margin: "Auto",
          textAlign: "center",
        }}
      >
        <span>Residential</span>
      </div>
      <Grid
        container
        style={{
          width: "95%",
          border: "1px solid #CACACA",
          margin: "Auto",
        }}
        className="my-2"
      >
        <Grid xs={6} style={{ borderRight: "1px solid #CACACA" }}>
          Rent
        </Grid>
        <Grid xs={6}>20,000</Grid>
      </Grid>
      <Grid
        container
        style={{
          width: "95%",
          border: "1px solid #CACACA",
          margin: "Auto",
        }}
        className="my-2"
      >
        <Grid xs={6} style={{ borderRight: "1px solid #CACACA" }}>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Open Popover
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "left",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Typography sx={{ p: 2 }}>
              <p>villa</p>
              <p>Apartment</p>
              <p>Bedroom</p>
            </Typography>
          </Popover>
        </Grid>
        <Grid xs={6}>SEMI FINISH</Grid>
      </Grid>
      <Grid
        container
        style={{
          width: "95%",
          border: "1px solid #CACACA",
          margin: "Auto",
        }}
        className="my-2"
      >
        <Grid xs={4} style={{ borderRight: "1px solid #CACACA" }}>
          11
        </Grid>
        <Grid xs={4} style={{ borderRight: "1px solid #CACACA" }}>
          111
        </Grid>
        <Grid xs={4}>111</Grid>
      </Grid>
      <Grid
        container
        style={{
          width: "95%",
          border: "1px solid #CACACA",
          margin: "Auto",
        }}
        className="my-2"
      >
        <Grid xs={4} style={{ borderRight: "1px solid #CACACA" }}>
          11
        </Grid>
        <Grid xs={4} style={{ borderRight: "1px solid #CACACA" }}>
          NAN
        </Grid>
        <Grid xs={4}>11</Grid>
      </Grid>
      <div
        className="my-2"
        style={{
          width: "95%",
          border: "1px solid #CACACA",
          margin: "Auto",
        }}
      >
        11
      </div>
      <div
        className="my-2"
        style={{
          width: "95%",
          border: "1px solid #CACACA",
          margin: "Auto",
        }}
      >
        Mohamed Hassan Shawa
      </div>
      <div
        className="my-2"
        style={{
          width: "95%",
          border: "1px solid #CACACA",
          margin: "Auto",
        }}
      >
        777777777
      </div>
    </div>
  );
};

export default SpaceDetails;
