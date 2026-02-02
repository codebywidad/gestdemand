import { Outlet } from "react-router";
import Footer from "../navrouter/footer";
import "./Layout.css";
import Header from "./header";
import Sidemenu from "./sidemenu";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Layout() {

  const user = useSelector((state) => state.USER.user);
  const [previewColor, setPreviewColor] = useState(user.couleur);




  return (<>
    <style>
        {`
          :root {
            --primary-color: ${previewColor};
          }

          /* Target anything with "btn-primary" */
          .btn-primary {
            background-color: var(--primary-color) !important;
            border-color: var(--primary-color) !important;
          }
          .btn-primary:hover {
            filter: brightness(0.9);
          }

          /* Target anything with "bg-primary" */
          .bg-primary {
            background-color: var(--primary-color) !important;
          }

          /* Target anything with "text-primary" */
          .text-primary {
            color: var(--primary-color) !important;
          }

          /* Target anything with "border-primary" or classes containing primary border logic */
          [class*="border-primary"], [class*="primary"] {
            border-color: var(--primary-color) !important;
          }

          /* Active state for the Sidemenu NavLinks */
          .nav-pills .nav-link.active {
            background-color: var(--primary-color) !important;
          }
        `}
      </style>
    <div className="layout-container">

      {/* Header */}
      <Header previewColor={previewColor} />

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
  </>
  );
}
