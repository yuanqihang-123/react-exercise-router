import React,{Fragment} from 'react';

const My_profile = (props) => {
    console.log(props)
    return (
        <Fragment>
            <span>username:xxx</span>
            <br></br>
            <span>gender:female</span>
            <br></br><span>work:it industry</span>
            <br></br><span>website :'my_profile'</span>
            <br></br>
        </Fragment>
    );
}

export default My_profile;