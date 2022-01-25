import React from "react";

const TreeNodeOne = (props) => {
  const styles = {
    backgroundColor: "yellow",
    padding: "15px",
    texrAlign: "center",
    border: "1px solid black",
    maxWidth: "150px",
    fontSize: "10px",
    position: "relative",
    // left: 0,
    // right: 0,
    margin: "auto",
  };

  return <div style={styles}>{props.text}</div>;
};

export default TreeNodeOne;
