import React from 'react'
import { Outlet } from 'react-router-dom' 

const Layout = () => { 
     return (
          <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <header style={{ background: '#f4f4f4', padding: '10px' }}>
                <h1>Resume Builder Layout</h1>
                <p>Describe Layout pages (Navbar/Sidebar)</p>
            </header>

            
            <div className="content-area" style={{ marginTop: '20px' }}>
                <Outlet /> 
            </div>
            
            <footer style={{ marginTop: '20px', fontSize: '12px' }}>
                © 2026 AI Resume Builder Project
            </footer>
          </div>
     )
}

export default Layout; 