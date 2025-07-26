import React from 'react'
import DashboardNavbar from '../../components/Dashboard/DashboardNavbar'
import DashboardSidebar from '../../components/Dashboard/DashboardSidebar'
import Project from '../../components/Dashboard/Project'

export default function ProjectPage() {
  return (
    <div>
      <DashboardNavbar />
                <div style={{ display: 'flex' }}>
              {/* Sidebar (fixed width) */}
              <div style={{  left: 0, top: 0, height: '100%', zIndex: 1000 }}>
                <DashboardSidebar />
              </div>
        
              {/* Content Area */}
              <div style={{
                marginLeft: '0px', // match sidebar width
                padding: '20px',
                width: '100%',
                backgroundColor: '#f1f3f5',
                minHeight: '100vh'
              }}>
                <Project />
              </div>
            </div>
                
            </div>
  )
}
