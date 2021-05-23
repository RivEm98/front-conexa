import React from 'react'
import {Link} from 'react-router-dom'

const ButtonLogout = (props)=>{
return(
    <Link to={props.to} onClick={props.click}><li className='button-lo'><i className={props.icon}></i>  {props.name}</li></Link>
)}

export default ButtonLogout;
