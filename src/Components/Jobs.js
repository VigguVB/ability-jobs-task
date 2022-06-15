import React from 'react';
import Button from './Button';
import './Jobs.css'

function Jobs(props) {
    return (
        <div className='main'>
            <div className='sub'>
                <div style={{marginLeft:"2%"}}>
                <h2>Accenture</h2>
                <h3>React Native Mobile Application Developer</h3>
                <h5>Experience: 2-6 Years</h5>
                <p>Bangalore/Chennai</p>
                <a href='https://mail.google.com/mail/u/0/#inbox/FMfcgzGpGTHLkhLBCFMLLLJttprfKWph?compose=new' target="blank">
              <Button name="Apply Now"/>
              </a>
                </div>
            </div>

            <div className='sub'>
                <div style={{marginLeft:"2%"}}>
                <h2>Wipro</h2>
                <h3>React JS  Developer</h3>
                <h5>Experience: 4-6 Years</h5>
                <p>Bangalore/Ahmedabad</p>
                <a href='https://mail.google.com/mail/u/0/#inbox/FMfcgzGpGTHLkhLBCFMLLLJttprfKWph?compose=new' target="blank">
              <Button name="Apply Now"/>
              </a>
                </div>
            </div>

            <div className='sub'>
                <div style={{marginLeft:"2%"}}>
                <h2>TCS</h2>
                <h3>Java Developer</h3>
                <h5>Experience: 2-4 Years</h5>
                <p>Bangalore/Chennai/Kolkatta/Chennai</p>
                <a href='https://mail.google.com/mail/u/0/#inbox/FMfcgzGpGTHLkhLBCFMLLLJttprfKWph?compose=new' target="blank">
              <Button name="Apply Now"/>
              </a>
                </div>
            </div>
        </div>
    );
}

export default Jobs;