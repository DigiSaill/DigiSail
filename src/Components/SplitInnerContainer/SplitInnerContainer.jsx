import React, { useState, useEffect } from "react";
import Spaces from "../Spaces/Spaces";
import SpaceDetails from "../SpaceDetails/SpaceDetails";
import CustomerComponent from "../CustomerComponent/CustomerComponent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SplitInnerContainer = () => {
  const [columnLayout, setColumnLayout] = useState(6);
  const [value, setValue] = React.useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const styles = {
    gridItem: {
      transition: "width 0.5s ease-in-out", // Adjust the duration and easing as needed
    },
  };
  const toggleCenter = () => {
    setColumnLayout(columnLayout === 6 ? 4 : 6);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="splitContainer">
      {isMobile ? (
        <Box sx={{ pb: 7 }}>
          <CssBaseline />
          {value === 0 && <Spaces />} {/* Render Spaces component */}
          {value === 1 && <SpaceDetails />}{" "}
          {/* Render SpaceDetails component */}
          {value === 2 && <CustomerComponent />}{" "}
          {/* Render CustomerComponent */}
          <Paper
            sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
            elevation={3}
          >
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Spaces" icon={<RestoreIcon />} />
              <BottomNavigationAction
                label="Available"
                icon={<FavoriteIcon />}
              />
              <BottomNavigationAction label="Customer" icon={<ArchiveIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={columnLayout} sx={styles.gridItem}>
            <Spaces toggleCenter={toggleCenter} />
          </Grid>
          {columnLayout === 4 && (
            <Grid item xs={columnLayout} sx={styles.gridItem}>
              <SpaceDetails setColumnLayout={setColumnLayout} />
            </Grid>
          )}
          <Grid item xs={columnLayout} sx={styles.gridItem}>
            <CustomerComponent />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default SplitInnerContainer;
