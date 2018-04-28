import React from 'react';
import classes from './Backdrop.css'

const backdrop = props => (
props.show? <div className={classes.Backsdrop} onClick={props.clicked}></div>: null);

backdrop.propTypes = {
    
};

export default backdrop;
