import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

/* so if we forget to put a message everytime we create a spinner, it defaults to a message */
Spinner.defaultProps = {
    message: 'Loading...'  
};

export default Spinner; 