import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import TablePosts from '../components/Table/TablePosts'

const Home = () => { 

return(
    
        <div className="row">
            <Navbar pageName="Conexa"/>
            <div className="row p-0">
                <Sidebar />
                <Dashboard name="Dashboard">
                    <TablePosts />
                </Dashboard>
            </div>
            
        </div>
)}

export default Home;