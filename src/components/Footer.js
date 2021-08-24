import React from 'react'

function Footer() {
    return (
        <div className="Footer" style={{
            height: '10vh',
            width: '100vw',
            minWidth: '20rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(20,20,20,1)',
            filter: 'drop-shadow(0 0 15px rgb(0, 0, 0))'
        }}>
            <p style={{
                fontSize: '0.8rem'
            }}        
            >
                © Guile Vieira - 2021
            </p>
        </div>

    )
}

export default Footer
