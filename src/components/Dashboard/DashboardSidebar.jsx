import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const togglePostion = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Fragment>
      <div>
        <div>
          <Sidebar
            collapsed={collapsed}
            rootStyles={{
              [`.${sidebarClasses.container}`]: {
                background: "linear-gradient(180deg, #000000 )",
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "bold",
                minHeight: "100vh",
                top: 0,
                left: 0,
                overflow: "auto",
                zIndex: 1000,
                width: collapsed ? "80px" : "240px",
                transition: "width 0.18s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "2px 0 16px rgba(41,91,231,0.08)",
                borderRight: "1.5px solid #e3e8ee",
                position: "fixed",
              }
            }}
          >
            <Menu />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "12px 22px",
                  borderRadius: "8px",
                  color:'#22C55E',
                  margin: "0.2rem 0",
                  "&:hover": {
                    background: "#22C55E",
                    color: "#ffffff",
                  },
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  transition: "background 0.18s, color 0.18s",
                },
              }}
            >
              <div className="d-flex align-items-center justify-content-center flex-row mb-3 gap-3">
                <div className="image d-flex mb-3 pt-2">
                  <FontAwesomeIcon
                    icon={faVuejs}
                    size="2x"
                    className="text-white"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: collapsed ? "center" : null,
                      paddingLeft: collapsed ? "18px" : "10px",
                      filter: "drop-shadow(0 2px 8px #000000aa)"
                    }}
                  />
                </div>
                <div className='d-flex flex-column pe-2'>
                  {!collapsed && (
                    <>
                      <h5 className="mb-0" style={{ fontWeight: 700, color: "#fff", letterSpacing: "1px" }}>Valuation Tool</h5>
                      {/* <span className='text-white-50' style={{ fontSize: "12px", marginTop: '-0.4rem' }}>Dashboard</span> */}
                    </>
                  )}
                </div>
              </div>

              <MenuItem component={<Link to="/dashboard" />} className="fw-normal">
                <span className="d-flex align-items-center" style={{ gap: "12px", justifyContent: collapsed ? "center" : "flex-start" }}>
                  <MdOutlineDashboard className="fs-5" />
                  {!collapsed && "Dashboard"}
                </span>
              </MenuItem>

              <MenuItem component={<Link to="/project" />} className="fw-normal">
                <span className="d-flex align-items-center" style={{ gap: "12px", justifyContent: collapsed ? "center" : "flex-start" }}>
                  <GoProject className="fs-5" />
                  {!collapsed && "Project"}
                </span>
              </MenuItem>

              <MenuItem component={<Link to="/profile" />} className="fw-normal">
                <span className="d-flex align-items-center" style={{ gap: "12px", justifyContent: collapsed ? "center" : "flex-start" }}>
                  <FaRegUser className="fs-5" />
                  {!collapsed && "Profile"}
                </span>
              </MenuItem>

              <hr style={{ borderColor: "#eaf0fe", margin: "1rem 0" }} />

              

              <button
                onClick={togglePostion}
                className="btn btn-outline-light text-success bg-transparent  d-flex align-items-center gap-2"
                style={{
                  width: "100%",
                  fontSize: "1rem",
                  background: "",
                  border: "none",
                  borderRadius: "8px",
                  // marginTop: "32rem",
                  paddingLeft:collapsed ? "0" : "1rem",
                  justifyContent: collapsed ? "center" : "flex-start",
                  top:"95%",
                  left: collapsed ? "0" :"0",
                  position: "absolute",

                }}
              >
                <FontAwesomeIcon icon={collapsed ? faArrowRight : faArrowLeft} className="fs-5" />
              </button>
            </Menu>
          </Sidebar>
        </div>
      </div>
    </Fragment>
  );
}
