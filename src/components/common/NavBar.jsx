import React, { Component} from 'react'
import logo from './assets/logo.png'
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'


const newEmployeeBtnStyle = {
    fontFamily: 'Poppins', 
    fontSize: '0.7vw',
    textDecoration: 'none',
    color: '#5851ea',
    backgroundColor:'white',
    paddingTop: '0.5vw',
    paddingBottom: '0.5vw',
    paddingLeft: '1.5vw',
    paddingRight: '1.5vw',
    borderRadius: '100px',
    fontWeight: 'bold'
}




class NavBar extends Component {
    
    constructor(){
        super();
        this.onHome = (window.location.pathname === '/');
    }    
    
    render(){
        return(
            <div style={{backgroundColor: this.onHome ? 'transparent' : '#5851ea' , height:'6vw'}} >  
                <Link to="/"><img id="logo" src={logo} alt="logo" /></Link>
                <div id="links">
                    <NavLink id="navbarButton" exact activeStyle={{fontWeight:'bold'}} to="/"> Home </NavLink>
                    <NavLink id="navbarButton" activeStyle={{fontWeight:'bold'}} to ="/pageTodo"> Absences</NavLink>
                    <NavLink id="navbarButton" activeStyle={{fontWeight:'bold'}} to="/team"> Employees </NavLink>
                    { !this.onHome ? <NavLink id="buttonNavBarAlt" style={newEmployeeBtnStyle} to="/team/newEmployee"> New Employee</NavLink> : null}
                </div>
            </div>
        )

    }
    
}

export default NavBar;