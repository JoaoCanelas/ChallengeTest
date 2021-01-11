import React from 'react'

import background from './common/assets/curve.png'
import square from './common/assets/el-1.png'
import dummyAvatar from './common/assets/dummy-avatar.jpg'
import cross from './common/assets/times-solid.svg'
import pencil from './common/assets/pencil.svg'

import './styles/dashboardStyle.css'
import {  Redirect } from 'react-router-dom'

const styleBKGnd={
    backgroundImage: 'url('+background+')',
    backgroundSize: '90%',
    backgroundPosition:'19vw -54vw',
    backgroundRepeat: 'no-repeat',  
    height: '90vw'
}

const titleStyle={
    fontFamily: 'Poppins', 
    fontSize: '2vw', 
    color: '#5851ea', 
    textAlign:'center', 
    width:'10vw',  
    fontWeight:'900', 
    position: 'absolute',
    top:'16vw',    
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
}

const styleSqr1={
    width:'5vw',
    position:'absolute',
    zIndex:'-1', 
    top:'14vw',
    left:'15%'
}
 
const styleSqr2={
    width:'5vw',
    position:'absolute',
    zIndex:'-1', 
    top:'17vw',
    right:'15%',
    transform:'rotate(230deg)'
}

const styleSqr3 = {
    width: '3.5vw',
    height: '3.5vw',
    zIndex: '-1',
    position: 'absolute',
    left:'20%',
    top: '85vw',
    backgroundColor: '#fcaed2',
    transform:'rotate(-20deg)'
}


const mainTableStyle = {
    position:'absolute',
    display: 'inline-block',
    width:'80%',
    height: '59vw',
    top: '25vw',
    left: '12.5%',
    overflow: 'scroll'
}

function Team(props) {

    const handleDeletion = (e, employee) => {
        let confirmation = window.confirm("You're about to delete a team employee! Are you sure?");
        if (confirmation){
            props.removeEmployee(employee);
            e.preventDefault();
        }
        else{
            return;
        }
    };

    //Incompleted
    const handleChange = (e, employee) =>{
        <Redirect to='/team/newEmployee' />
        props.changeEmployee(employee);
        e.preventDefault();
    };

    // v[0] -> id
    // v[1] -> name
    // v[2] -> birthday
    // v[3] -> address
    // v[4] -> status
    // v[5] -> position
    // v[6] -> creation
    // v[7] -> update

    return (
        <div style={styleBKGnd}  >         
            <div style={{height:'90vw'}}>
                <img alt='' src={square} style={styleSqr1} />
                <img alt='' src={square} style={styleSqr2} />
                <p style={titleStyle}> Team </p>
                <table id='mainTable' style={mainTableStyle}>
                    { (props.employees.length !==0) ? 
                        <tbody style={{width:'100%'}}>
                            <tr id='mainRow' style={{width:'100%'}}>
                                {props.employees.map((list) => {
                                    return  <td id='container' key={list[0]}>
                                                <table id='employeeSlot'>
                                                    <thead>
                                                        <tr>
                                                            <th id='slotHeader'  >
                                                                <img id='avatar' src={dummyAvatar} alt='' />
                                                                <div id='divHead'>
                                                                    <p id='employeeName' style= {{marginTop:'1.5vw', marginBottom:'0.5vw'}} >{list[1]}</p>
                                                                    <p id='employeeInfoHd' style= {{marginTop:'0.1vw'}}>Employee ID: {list[0]} </p>
                                                                    <input to='/team/newEmployee' id='editSlot' src={pencil} type='image' alt='' onClick= { (e) => {handleChange(e, list)} } />
                                                                    <input id='deleteSlot' src={cross} type='image' alt='' onClick= { (e) => {handleDeletion(e, list)} } />
                                                                </div>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr><td id='employeeInfoBdTop'>Birthday: {list[2]}</td></tr>
                                                        <tr><td id='employeeInfoBd'>Address: {list[3]}</td></tr>
                                                        <tr><td id='employeeInfoBd'>Status: {list[4]}</td></tr>
                                                        <tr><td id='employeeInfoBd'>Position: {list[5]}</td></tr>
                                                        <tr><td id='employeeInfoBd'>Created: {list[6]}</td></tr>
                                                        <tr><td id='employeeInfoBd'>Updated: {list[7]}</td></tr>
                                                    </tbody>  
                                                </table>
                                        </td>    
                                
                                })}
                            </tr>
                        </tbody> : <tbody style={{display: 'block'}}><tr style={{display: 'block'}} ><td style={{display: 'block'}}><p id='emptySentence'>Your team is empty! Add an employee to get started!</p></td></tr></tbody>
                    }         
                </table>
                <div style={styleSqr3} />      
            </div>                                  
        </div>  
        
                
    )
}
    
export default Team;