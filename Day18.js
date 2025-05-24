// jo classe ke names hai inki styling define hai css me <https://namastedev.com/practice/sidebar> you can and check

import React, { useState } from "react";
import "./styles.css";
import { Menu } from "lucide-react";

function Sidebar() {
  const [sidebaarOpen, setSidebaarOpen] = useState(false);

  const handleToggle = () => {
    setSidebaarOpen(!sidebaarOpen);
  };

  return (
    <div
      data-testid="sidebar"
      className={`sidebar ${sidebaarOpen ? "open" : ""}`}>
      <button
        data-testid="btn-toggle"
        onClick={handleToggle}
        className="toggle-btn">
        {<Menu data-testid="icon-menu" />}
      </button>

      {sidebaarOpen && (
        <nav className="nav-menu" data-testid="nav-menu">
          <ul className="nav-list">
            <li data-testid="nav-item-home" className="nav-item">
              Home
            </li>
            <li data-testid="nav-item-about" className="nav-item">
              About
            </li>
            <li data-testid="nav-item-services" className="nav-item">
              Services
            </li>
            <li data-testid="nav-item-contact" className="nav-item">
              Contact
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
