import React from 'react'

function Footer() {
    return (
        <div className="Footer" style={{
            height: '10vh',
            width: '20vw',
            minWidth: '20rem',
            position: 'absolute',
            bottom: '0',
            left: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'

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
