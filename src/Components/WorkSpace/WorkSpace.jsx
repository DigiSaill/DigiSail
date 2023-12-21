import React from "react";
import { useSelector } from "react-redux";
const WorkSpace = () => {
  const Companies = useSelector((state) => state.loginUser);
  console.log('Companies',Companies);
  return (
    <div>
      <h1>WorkSpace</h1>



    </div>
  );
};

export default WorkSpace;
