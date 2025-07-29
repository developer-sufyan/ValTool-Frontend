import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const togglePosition = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <Fragment>
      <Sidebar
        collapsed={collapsed}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
            color: "#f1f5f9",
            fontSize: "1rem",
            fontWeight: "500",
            minHeight: "100vh",
            width: collapsed ? "100px" : "250px",
            transition: "width 0.3s ease",
            position: "fixed",
            top: 0,
            left: 0,
            boxShadow: "2px 0 10px rgba(0,0,0,0.15)",
            borderRight: "1px solid #334155",
            zIndex: 1000,
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: {
              padding: "12px 20px",
              borderRadius: "6px",
              color: "#cbd5e1",
              margin: "6px 12px",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#22c55e",
                color: "#fff",
              },
              transition: "background 0.3s, color 0.3s",
            },
          }}
        >
          {/* Brand */}
          <div className="d-flex align-items-center gap-2 py-4 ps-4 px-3">
            <Link to="/" className="text-decoration-none">
              <FontAwesomeIcon
              icon={faVuejs}
              size="2x"
              className="text-success"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
              }}
            />
            </Link>
            {!collapsed && (
              <h5
                className="mb-0 fw-bold text-white"
                style={{ letterSpacing: "1px", fontSize: "1.1rem" }}
              >
                Valuation Tool
              </h5>
            )}
          </div>

          <MenuItem component={<Link to="/dashboard" />}>
            <div className="d-flex align-items-center gap-3">
              <MdOutlineDashboard className="fs-5" />
              {!collapsed && "Dashboard"}
            </div>
          </MenuItem>

          <MenuItem component={<Link to="/project" />}>
            <div className="d-flex align-items-center gap-3">
              <GoProject className="fs-5" />
              {!collapsed && "Project"}
            </div>
          </MenuItem>

          <MenuItem component={<Link to="/profile" />}>
            <div className="d-flex align-items-center gap-3">
              <FaRegUser className="fs-5" />
              {!collapsed && "Profile"}
            </div>
          </MenuItem>

          {/* Divider */}
          <hr style={{ borderColor: "#475569", margin: "1.2rem 0" }} />

          {/* Toggle Button */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <button
              onClick={togglePosition}
              className="btn text-white px-3 py-2"
              style={{
                fontSize: "0.95rem",
                backgroundColor: "transparent",
                border: "1px solid #475569",
                borderRadius: "6px",
                width: collapsed ? "40px" : "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              <FontAwesomeIcon icon={collapsed ? faArrowRight : faArrowLeft} />
            </button>
          </div>
        </Menu>
      </Sidebar>
    </Fragment>
  );
}
