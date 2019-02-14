import React, { Component } from 'react';
import {
Button
} from 'reactstrap';
import './homepage.css';

const Homepage = props => {
  const {data} = props;

  const ListButton = data.map((e, i) => {
    return (
      <>
      <Button key={i} className= "poke-btn" color="white" size="lg" block>
        <img style={{display: "inline", float:"left"}} alt="icon" src={e.image}></img>
        <p style ={{textAlign:"center"}}>{e.name}</p><span style={{textAlign:"right"}} >{e.number}</span>
      </Button>
      </>
    );
  });
  

return (
    <React.Fragment>
    <div className='btn-group'>
      {ListButton}

    </div>    
    <p onClick={props.getlist}>Load More</p>
    </React.Fragment>
  )
    
}

export { Homepage };