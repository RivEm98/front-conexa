import React from 'react'
import ButtonSidebar from '../ButtonSidebar/ButtonSidebar'
import './Sidebar.css'
import { useHistory } from 'react-router-dom';

const Sidebar = ()=>{
const history = useHistory()
const logOut = () =>{
    window.localStorage.clear()
    history.push('/')
}
return(
    <div className="col-md-4 col-lg-3 col-xl-2 sidebar d-none d-md-block d-lg-block">
        <p className="navigate">NAVIGATE</p>
        <ul>
            <ButtonSidebar name="Posts" icon="bi bi-table" to="/home"/>
            <ButtonSidebar name="Photos" icon="bi bi-table" to="/photos"/>
            <ButtonSidebar name="Log Out" click={logOut} icon="bi bi-door-open" to="/"/>
        </ul>
    </div>
)
}

export default Sidebar;
