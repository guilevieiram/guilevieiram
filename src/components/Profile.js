import React from 'react';
import '../styles/Profile.css';

import profilePic from '../images/profile-pic.jpg'
import profileBlobBlue from '../images/profile-blob-blue.png'
import profileBlobOrange from '../images/profile-blob-orange.png'

function Profile() {
    return (
        <div className='Profile'>

            <div className='profile-background'>
                <img className='profile-blob-blue' src={profileBlobBlue} alt="" />
                <img className='profile-blob-orange' src={profileBlobOrange} alt="" />
            </div>

            <div className='profile-pic-container'><img src={profilePic} alt="" /></div>
            
        </div>
    )
}
export default Profile;