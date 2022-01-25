import React, { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import TreeNodeOne from "./TreeNode";
import { utlis } from "./Utils";

const OrgChart = () => {
  const [nodes, setNodes] = useState(utlis.createSortedNodes());

  return (
    <Tree
      lineWidth={"1px"}
      lineColor={"black"}
      lineBorderRadius={"2px"}
      label={<TreeNodeOne text={nodes[0].description} />}
    >
      {nodes?.map((v, i) =>
        i === 0
          ? null
          : v.childIdNodes.map((w, j) => (
              <TreeNode label={<TreeNodeOne></TreeNodeOne>}></TreeNode>
            ))
      )}
    </Tree>
  );

  // <Tree
  //   lineWidth={"1px"}
  //   lineColor={"black"}
  //   lineBorderRadius={"2px"}
  //   label={<TreeNodeOne text={nodes[0].description} />}
  // >
  //   {nodes?.map((v, i) => {
  //     if (v.childIdNodes === "0") {
  //       return null;
  //     } else {
  // return (
  //   <TreeNode label={<TreeNodeOne text={v.description} />}>
  //     {v.childIdNodes?.map((w, j) => (
  //       <TreeNode label={<TreeNodeOne text={w.description} />} />
  //     ))}
  //   </TreeNode>
  // );
  //     }
  //   })}

  //  <TreeNode label="Alka">
  //   <TreeNode label="Grand Child" />
  // </TreeNode>
  // <TreeNode label="Kiran">
  //   <TreeNode label="Grand Child">
  //     <TreeNode label="Great Grand Child 1" className="red" />
  //     <TreeNode label="Great Grand Child 2" />
  //   </TreeNode>
  // </TreeNode>
  // <TreeNode label="Ajinkya">
  //   <TreeNode label="Grand Child 1" />
  //   <TreeNode label="Grand Child 2" />
  // </TreeNode>
  // </Tree>
};

export default OrgChart;
