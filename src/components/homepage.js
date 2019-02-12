import React, { Component } from 'react';
import {
Button
} from 'reactstrap';
import './homepage.css';

const Homepage = props => {

  // const {data} = props;
  // const { sprites,
  //         name,
  //         id} = data;
  

return (
    <React.Fragment>
    <div className='btn-group'>
      <Button className= "poke-btn" color="white" size="lg" block>
      <img style={{display: "inline", float:"left"}} alt="icon" src="https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png"></img>
        <p style ={{textAlign:"center"}}>Bulbasaur</p><span style={{textAlign:"right"}} >ID</span>
      </Button>
      {/* <Button className= "poke-btn" color="white" size="lg" block>Bulbasaur</Button>
      <Button className= "poke-btn" color="white" size="lg" block>Bulbasaur</Button>
      <Button className= "poke-btn" color="white" size="lg" block>Bulbasaur</Button>
      <Button className= "poke-btn" color="white" size="lg" block>Bulbasaur</Button> */}
    </div>    
    </React.Fragment>
  )
    
}

export { Homepage };