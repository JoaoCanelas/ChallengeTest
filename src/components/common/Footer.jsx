import React from 'react'
import { Link } from "react-router-dom"

import footerBackground from './assets/curve-1.png'
import logo from './assets/logo.png'
import facebookIcon from './assets/facebook.png'
import twitterIcon from './assets/twitter.png'
import instagramIcon from './assets/instagram.png'
import linkedInIcon from './assets/linkedin.png'


const styleBg = {
    backgroundImage: "url("+ footerBackground +")",  
    backgroundColor: '#5851EA',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '80% 60%',
    backgroundSize: '100% 70%',
    maxWidth: '100%',
    height: '40vw',
    width: 'auto',
    position:'relative'  
}


const mainDiv = {
    borderBottom: '0.1vw solid white',
    display:'inline-block',
    width:'80%',
    maxWidth: '90%',
    height:'50%',
    marginLeft: '15%',
    marginTop: '6%',
    position: 'absolute',
    zIndex:'10'
}

const divStyle = {
    width:'25%',
    height: 'auto',
    margin: '0vw 1.5vw 5vw 2vw',
    paddingRight: '1vw',
    float: 'left',
    color: 'white',
    fontFamily: 'Poppins', 
    display: 'inline-block'
}

const divStyleAlt = {
    width:'15%',
    height: 'auto',
    margin: '0vw 0vw 5vw 4vw',
    float: 'left',
    fontFamily: 'Poppins', 
    display: 'inline-block'
}

const smallTextStyle = {
    fontSize: '0.8vw',
    marginTop: '5%',
    color: 'white',
    textDecoration: 'none',
    display: 'block'
}

const bottomPhraseStyle = {
    marginTop:'31%',
    marginLeft: '43%',
    fontSize: '0.9vw',
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins'    
}



function Footer() {
    return (
        <div style={styleBg}>
            <div style={mainDiv}>
                <div style={divStyle}>

                    <Link to="/" >
                        <img src={logo} alt="logo" style={{height: '2vw', width:'6.85vw', marginTop: '5%'}} />
                    </Link>

                    <p style={smallTextStyle}> Me old mucker Harry don't get shirty with me he nicked it up the kyver gutted mate spend a penny bloke my good sir in my flat bleeding quaint.!</p>
                    <div style={{paddingTop:'0.2vw'}}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} > <img src={facebookIcon} alt=""  style={{width:'7%', paddingRight: '2vw' }} /></a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}> <img src={twitterIcon} alt="" style={{width:'10%', paddingRight: '2vw' }} /></a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}> <img src={instagramIcon} alt="" style={{width:'9%', paddingRight: '2vw' }} /></a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}> <img src={linkedInIcon} alt="" style={{width:'10%', paddingRight: '2vw' }} /></a>
                    </div>
                    
                </div>

                <div style={divStyleAlt}>
                    <p style={{fontSize: '1vw', fontWeight:'bold', color: 'white'}}>Company</p>
                    <div style={smallTextStyle}>
                        <Link style={smallTextStyle} to='/'>Home</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Features</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Screenshots</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Pricing</Link>
                        <Link style={smallTextStyle} to='/team'>Team</Link>
                    </div>
                </div>
                <div style={divStyleAlt}>
                    <p style={{fontSize: '1vw', fontWeight:'bold',color: 'white'}}>Help</p>
                    <div style={smallTextStyle}>
                        <Link style={smallTextStyle} to='/pageTodo'>Help Center</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>FAQ's</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Terms & Conditions</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Privacy</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Contacts</Link>
                    </div>
                </div>
                <div style={divStyleAlt}>
                    <p style={{fontSize: '1vw', fontWeight:'bold',color: 'white'}}>Solutions</p>
                    <div style={smallTextStyle}>
                        <Link style={smallTextStyle} to='/pageTodo'>Consumer</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Saas</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Education</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Gaming</Link>
                        <Link style={smallTextStyle} to='/pageTodo'>Financial Services</Link>
                    </div>    
                </div>
            </div>
            
            <p style={bottomPhraseStyle}>@ indianpix | All rights reserved 2019</p>
             
        </div>
    )
}

export default Footer;