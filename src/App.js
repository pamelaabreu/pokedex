import React, { Component } from 'react';
import './App.css';
import {Profile} from './components/profile';
import {Searchbar} from './components/searchbar';

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
          ['HP']: 45,
          ['Attack']: 49,
          ['Defense']: 49,
          ['Sp.Attack']: 65,
          ['Sp.Defense']: 65,
          ['Speed']: 45,
        },
        moves: [
          {
            name: 'Razor Wind',
            type: 'special',
            power: 80,
            pp: 10,
          },
          {
            name: 'Swords Dance',
            type: 'status',
            power: null,
            pp: 20,
          },
          {
            name: 'Cut',
            type: 'physical',
            power: 50,
            pp: 30,
          }
        ]

      }

    }

  }

  render() {

    return (
      <>
        <Searchbar />
        <h1>Replace this line with Homepage Component</h1>
        <Profile data={this.state.select_pk}/>
      </>
    );
  }
}

export default App;
