import React, { Component } from 'react';
import './App.css';
import  {Profile}  from './components/profile';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: '',
      poke_list: [
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
        {image: 'https://img.pokemondb.net/sprites/sun-moon/icon/bulbasaur.png', name: 'bulbasaur', number: 1},
      ],
      select_pk: {
        name:'bulbasaur',
        id: 1,
        image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
        sprites: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"],
        types: ['poison', 'grass'],
        baseStats: {
          hp: 45,
          attack: 49,
          defense: 49,
          spAttack: 65,
          spDefense: 65,
          speed: 45,
        },
        moves: {
          name: 'Razor Wind',
          type: 'physical',
          power: 50,
          pp: 30,
        }

      }

    }

  }

  render() {
    return (
      <>
        <h1>Replace this line with Search bar Component</h1>
        <h1>Replace this line with Homepage Component</h1>
        <Profile data={this.state.select_pk}/>
      </>
    );
  }
}

export default App;
