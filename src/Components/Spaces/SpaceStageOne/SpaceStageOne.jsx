import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "./SpaceStageOne.css";
const SpaceStageOne = ({ toggleCenter }) => {
  const [statusColor, setStatusColor] = useState("#FFABAB");
  return (
    <div className="SpaceStageOne my-2">
      <Grid container spacing={0} style={{ borderRadius: "10px" }}>
        <Grid xs={11}>
          <Grid container spacing={0}>
            <Grid
              className="SpaceStageOneGridLineOne"
              style={{ backgroundColor: `${statusColor}`, textAlign: "center" }}
              xs={12}
            >
              <div className="row">
                <div className="col-4">Vila</div>
                <div className="col-4">Simi Finish</div>
                <div className="col-4">Rent</div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={0} className="SpaceStageOneGridLineTwo">
            <Grid xs={12}>
              <div className="row">
                <div className="col-4">New Giza</div>
                <div className="col-4">Sixth Of October</div>
                <div className="col-4">20K</div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={0} className="SpaceStageOneGridLineThree">
            <Grid xs={12}>
              <div className="row">
                <div className="col-6">20</div>
                <div className="col-6">Sixth Of October</div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          className="d-flex flex-column justify-content-center align-items-center"
          xs={1}
          style={{ backgroundColor: `${statusColor}`, textAlign: "center" }}
        >
          <div className="d-flex flex-column justify-content-center align-items-start">
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LibraryAddCheckIcon"
            >
              <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path>
            </svg>
          </div>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            onClick={toggleCenter}
          >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="LaunchIcon"
            >
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SpaceStageOne;
