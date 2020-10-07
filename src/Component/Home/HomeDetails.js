import React from 'react';
import "./HomeDetails.css";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const HomeDetails = (props) => {
    console.log(props.item)
    const {name, id, img}= props.item
    return (
        <div className="col-md-3">
       <Link to = {`/register/${id}`}><Card.Img variant="top" style={{height:"25vw", width:"25vw",padding:"1px", margin:'5px 2%'}} src={require(`../../images/${img}`)} />
          <Card.Body >
           <Card.Title  >{name}</Card.Title>
            </Card.Body>  </Link>
        </div>
    );
};

export default HomeDetails;
