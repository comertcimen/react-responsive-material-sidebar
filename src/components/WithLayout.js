import React from "react";
import { useSelector } from "react-redux";

const WithLayout = (props) => {
  const open = useSelector((state) => state.sidebarOpen);
  return <div style={{ marginLeft: open ? 240 : 45 }}>{props.children}</div>;
};

export default WithLayout;
