import React from 'react';
import style from "./Button.css";
const Button = ({handleRefreshClick}) => {
    return (
        <div>
           <button onClick={handleRefreshClick}>Refresh</button> 
        </div>
    );
};

export default Button;