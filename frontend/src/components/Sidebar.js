import React from "react";
import { FaShieldAlt, FaChartPie, FaHistory } from "react-icons/fa";

function Sidebar({ setActiveTab }) {
  return (
    <div className="sidebar">
      <h2>Fraud AI</h2>

      <ul>
        <li onClick={() => setActiveTab("dashboard")}>
          <FaShieldAlt /> Dashboard
        </li>

        <li onClick={() => setActiveTab("analytics")}>
          <FaChartPie /> Analytics
        </li>

        <li onClick={() => setActiveTab("history")}>
          <FaHistory /> History
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;