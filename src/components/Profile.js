import React from 'react';
import '../styles/Profile.css';
import * as animate from '../animations';

import profilePic from '../images/profile_zap.jpeg'
import profileBlobBlue from '../images/profile-blob-blue.png'
import profileBlobOrange from '../images/profile-blob-orange.png'

function Profile() {
    return (
        <div className='Profile'>

            <div className='profile-background'>
                {animate.woble(<img className='profile-blob-blue' src={profileBlobBlue} alt="" />)}
                {animate.woble(<img className='profile-blob-orange' src={profileBlobOrange} alt="" />)}
            </div>

            <div className='profile-pic-container'><img src={profilePic} alt="" /></div>
            
        </div>
    )
}
export default Profile;