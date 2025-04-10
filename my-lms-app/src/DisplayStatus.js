import React from 'react';

function DisplayStatus({ type, message }) {
    const style = {
        padding: '10px',
        marginTop: '15px',
        marginLeft: '150px',
        marginRight: '150px', 
        borderRadius: '5px',
        textAlign: 'center',
        color: type === 'success' ? 'green' : 'red',
        border: `1px solid ${type === 'success' ? 'green' : 'red'}`
    
    };

    return message ? <div style={style}>{message}</div> : null;
}

export default DisplayStatus;
