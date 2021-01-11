import React, {Fragment} from 'react'
import {Link} from "react-router-dom"

import landing from "./common/assets/img-landing.png"
import Footer from './common/Footer'
import NavBar from './common/NavBar'
import circle from './common/assets/circle-footer.png'

import "./styles/Home.css"

const styleTitle = {
    fontFamily: 'Poppins',
    fontSize: "2.5vw",
    fontWeight: "bold"
    
}

const styleBase = {
    fontFamily: 'Open Sans',
    fontSize: "1.1vw",
    color: 'grey',
    
}

const learnMoreBtnStyle = {
    width: '10vw',
    padding: '0.8vw 0',
    backgroundColor: '#5851ea',
    color: 'white',
    textAlign: 'center',
    fontSize: '1vw',
    display: 'block',
    borderRadius: '100px',
    border: '1px solid rgba(1,1,1,0.1)',
    fontFamily: 'Poppins',
    
    textDecoration: 'none',
    marginTop: '2vw',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.5)',
    cursor: 'pointer'

}


function Home() {
    return (
        <Fragment>
            <div id='mainPage'>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                
                <div id="Section1">
                    <NavBar />
                    <div id="centerLandingMsg">
                        <p id="landingMotto">Make Your Team the best it can be</p>
                        <Link id="enterLandingBtn" to="/team/newEmployee"> Enter </Link>
                    </div>                   
                </div>

                <div id="Section2" >
                    <div id="lorem1">
                        <p style={{borderTop: "0.2vw solid #5851ea", width:"5vw", display: "inline-block", borderRadius:"10px"}} />
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div id="rightSide">
                        <img src={landing} alt="" style={{maxHeight:'100%', maxWidth:'100%'}}/>
                    </div>
                    <div id="leftSide">
                        <div id="lorem2">
                            <p  style={styleTitle} >Augmented Reality</p>
                            <p style={{borderTop: "0.2vw solid #5851ea", width:"7.3vw", display: "inline-block", borderRadius:"60px"}} />
                            <p style={styleBase} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                            <Link to='/pageTodo' style={{textDecoration:'none'}}> 
                                <button style={learnMoreBtnStyle}>Learn More</button>
                            </Link>
                        </div> 
                    </div>
                </div>

                <Footer />
                <img alt="" src={circle} style={{position:'absolute', zIndex:'5', marginTop:'-40%', maxWidth:'100%' }}/>
             </div>
        </Fragment>  
    )
}

export default Home;