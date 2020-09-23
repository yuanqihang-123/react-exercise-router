import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const My_profile = (props) => {
    console.log(props)
    return (
        <Fragment>
            <span>company:thoughtworks local</span>
            <br></br>
            <span>local:wuhan</span>
            <br></br><span>for more information ,please</span>
            <br></br><span>view our </span>
            <Link to="/home">website</Link>
        </Fragment>
    );
}

export default My_profile;