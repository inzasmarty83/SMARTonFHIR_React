import React from "react";
import ReactFlow from "react-flow-renderer";
import { utlis } from "./Utils";
import OrgChart from "./OrgChart";

const FlowChart = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow elements={utlis.filterData()} onNodeDrag={utlis.nodeDragged} />
      {/* <OrgChart></OrgChart> */}
    </div>
  );
};

export default FlowChart;
