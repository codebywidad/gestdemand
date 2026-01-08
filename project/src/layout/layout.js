import { Outlet } from "react-router";
import Footer from "../navrouter/footer";
import "./Layout.css";
import Header from "./header";
import Sidemenu from "./sidemenu";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Layout(){

    const user = useSelector((state) => state.USER.user);
    const [previewColor, setPreviewColor] = useState(user.couleur);




    return (
     <div className="layout-container">
      
      {/* Header */}
      <Header previewColor={previewColor}/>

      {/* Main Section */}
      <div className="layout-main">
        
        {/* Sidebar / Navigation */}
        <aside className="layout-sidebar">
          <Sidemenu />
        </aside>

        {/* Page Content */}
        <main className="layout-content">
          <Outlet context={{ previewColor, setPreviewColor }} />
        </main>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
