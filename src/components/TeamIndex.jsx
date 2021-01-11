import React, { useState, Fragment } from 'react'

import TeamList from './Team.jsx'
import NewEmployeeForm from './NewEmployee.jsx'
import Footer from './common/Footer'
import NavBar from './common/NavBar'


function TeamIndex() {
  const location = window.location.pathname;
  var showDivTeam = null;

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = (employee) => {
    let employees = [...employeeList, employee];
    setEmployeeList(employees);
    //console.log(employees);
  }

  let changeEmployeeCheck;
  let employeeToChange;
   
 
  const removeEmployee = (employee) =>{ 
    let tempList = [...employeeList];
    const index = employeeList.indexOf(employee);
    tempList.splice(index,1);
    setEmployeeList(tempList);
  }; 

  const changeEmployee = (employee) =>{
    //console.log('hey')
    changeEmployeeCheck = true;
    employeeToChange = employee;
  }

 

  function checkURL(){
      showDivTeam = location === '/team' ? true : false; 
  }

  

  return (
      <Fragment>
          <NavBar />
          {checkURL()}
          {showDivTeam ? <TeamList employees={employeeList} removeEmployee={removeEmployee} changeEmployee={changeEmployee} /> : <NewEmployeeForm changeEmployeeCheck={changeEmployeeCheck} employeeToChange={employeeToChange} addEmployee={addEmployee} />}
          <Footer />
      </Fragment>
  )
}

export default TeamIndex;