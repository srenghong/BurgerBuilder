import React from "react";
import "../App.css";

const Layout = props => (
  <>
    <main className="Content">{props.children}</main>
  </>
);

export default Layout;
