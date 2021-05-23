import React from 'react'
import Sidebar from '../components/SideBar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Dashboard from '../components/Dashboard/Dashboard'
import TablePhotos from '../components/Table/TablePhotos'

const Home = () => { 

return(
    
        <div className="row">
            <Navbar pageName="Conexa"/>
            <div className="row p-0">
                <Sidebar />
                <Dashboard name="Dashboard">
                    <TablePhotos />
                </Dashboard>
            </div>
            
        </div>
)}

export default Home;