import React from 'react';
import "./HomeDetails.css"

const HomeDetails = (props) => {
    const {name, img} = props.item
    return (
        <div className="col-md-3">
            <img style={{height:"25vw", width:"25vw",padding:"1px", margin:'5px 2%'}} className="main" src={require(`../../images/${img}`)} alt=""/>
            <h3> {name} </h3>
        </div>
    );
};

export default HomeDetails;