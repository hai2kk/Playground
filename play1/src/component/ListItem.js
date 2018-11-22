import React from "react";

const ListItem = (props) => {
  return <div style={props.style}>{props.children}</div>;
};

export default ListItem;