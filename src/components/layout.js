import React from "react";
import "../App.css";

const Layout = props => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </>
);

export default Layout;
