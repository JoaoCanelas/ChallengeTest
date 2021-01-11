import React, { useState } from 'react'

import background from './common/assets/curve.png'
import square from './common/assets/el-1.png'

import './styles/FormStyle.css'


//==== BACKGROUND STYLING ======
const styleBKGnd={
    backgroundImage: 'url('+background+')',
    backgroundSize: '90%',
    backgroundPosition:'19vw -54vw',
    backgroundRepeat: 'no-repeat',
    height: '65vw',
    
  }
  
  const styleSqr1={
    width:'5vw',
    position:'absolute',
    zIndex:'-1', 
    top:'14vw',
    left:'15%',
  
  }
  
  const styleSqr2={
    width:'5vw',
    position:'absolute',
    zIndex:'-1', 
    top:'17vw',
    right:'15%',
    transform:'rotate(230deg)'
  
  }

  //===================

function NewEmployee(props){

    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');
    const [position, setPosition] = useState('');
    const [creation, setCreation] = useState('');
    const [update, setUpdate] = useState('');
    
    const clearInputs = () => {
        setID('');
        setName('');
        setBirthday('');
        setAddress('');
        setAddress('');
        setStatus('');
        setPosition('');
        setCreation('');
        setUpdate('');
    }

    const handleSubmit= (e) => {
        props.addEmployee([id, name, birthday, address, status, position, creation, update]);
        clearInputs();
        alert('Employee added! You can check on your team dashboard.');
        e.preventDefault();
    }

    //Incompleted
    let isThereEmployee = props.checkIfEmployeeToChange;
    function checkIfEmployeeToChange(isThereEmployee){
        
        if (isThereEmployee){
            const employee = props.employeeToChange;
            setID(employee[0]);
            setName(employee[1]);
            setBirthday(employee[2]);
            setAddress(employee[3]);
            setStatus(employee[4]);
            setPosition(employee[5]);
            setCreation(employee[6]);
            setUpdate(employee[7]);
        }
        
    }

    return (  
        <div style={styleBKGnd}>
            <div style={{height: '60vw'}} >
                {checkIfEmployeeToChange(isThereEmployee)}
                <img alt='' src={square} style={styleSqr1} />
                <img alt='' src={square} style={styleSqr2} />
                <p id='title'> New Employee</p>
                <form id='form' onSubmit={e => { handleSubmit(e)} }>
                    <p style={{color: '#5851ea', fontFamily: 'Poppins', paddingLeft:'2vw', paddingBottom:'1vw'}}>* Required</p>
                    <input required id='longTextInput' placeholder = '*Employee Id:'  name='id' type='number' value={id} onChange={e => setID(e.target.value)}/>
                    <br />
                    <input required id='longTextInput' placeholder = '*Name:' name='name' type='text' value={name} onChange={e => setName(e.target.value)} />
                    <br />
                    <input id='longTextInput' placeholder = 'Birthday:' name='birthday' type='text' value={birthday} onChange={e => setBirthday(e.target.value)} />
                    <br />
                    <input id='longTextInput' placeholder = 'Address:' name='address' type='text' value={address} onChange={e => setAddress(e.target.value)} />
                    <br/>
                    <input id='longTextInput' placeholder = 'Status:' name='status' type='text' value={status} onChange={e => setStatus(e.target.value)} />
                    <br/>
                    <input required id='longTextInput' placeholder = '*Position:' name='position' type='text' value={position} onChange={e => setPosition(e.target.value)}/>
                    <br/>
                    <input required id='smallTextInputLeft' placeholder = '*Created:' name='creation' type='text' value={creation} onChange={e => setCreation(e.target.value)} />
                    <input id='smallTextInputRight' placeholder = 'Updated:' name='update' type='text' value={update} onChange={e => setUpdate(e.target.value)}/>
                    <br />
                    <button type='submit' id='submitBtn' value = 'Submit' > Submit </button> 
                </form>
            </div>
        </div>   
    )
}

export default NewEmployee;