import React from "react";
import CustomizedHook from "../SearchComponent/SearchComponent";
import SplitInnerContainer from "../SplitInnerContainer/SplitInnerContainer";

const SplitScreen = () => {
  return (
    <div style={{width:"100%",padding:"0.6rem 0.3rem"}}>
      <CustomizedHook />
      <SplitInnerContainer />
    </div>
  );
};

export default SplitScreen;
