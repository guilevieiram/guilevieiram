import React from 'react';
import * as animate from '../animations';

import upArrow from '../images/up-arrow.png';

function Footer() {

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className="Footer" style={{
            height: '10vh',
            width: '100vw',
            minWidth: '20rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'rgba(20,20,20,1)',
            filter: 'drop-shadow(0 0 15px rgb(0, 0, 0))'
        }}>
            <p style={{
                fontSize: '0.8rem'
            }}        
            >
                © Guile Vieira - 2021
            </p>

            <p style={{
                fontSize: '0.8rem'
            }}
            >
                All rights reserved.
            </p>


            {animate.upDown(
                <button 
                    onClick={scrollTop}
                    style={{
                        border: '2px solid var(--highlight-color-1)',
                        borderRadius: '2rem',
                        color: 'var(--highlight-color-1)',
                        height: '5vh',
                        width: '5vw',
                        minWidth: '6rem',
                        minHeight: '2rem',
                        filter: 'drop-shadow(0 0 15px black)',
                        backgroundColor: 'rgba(0,0,0,0%)',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >    
                    <img style={{
                        width: '2rem',
                        }} 
                        src={upArrow} alt="arrow-up" 
                    />
                    <p>Up</p>
                </button>
            )}

        </div>

    )
}

export default Footer
