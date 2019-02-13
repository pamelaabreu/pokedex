import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import {Profile} from './components/profile';
import {Homepage} from './components/homepage';
import Searchbar from './components/searchbar';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: '',
      poke_list: [],
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

  getlist = () => {
    let offset = 0;
    let listUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`;

    Axios.get(listUrl)
      .then(response => response.data)
      .then(data => {
        offset += 20;

        if(this.state.poke_list.length >= 20){
          const dataList = data.results.map((e, i) => {
            const name = e.name;
            const number = i + 1 + this.state.poke_list.length;
            const image = `https://img.pokemondb.net/sprites/sun-moon/icon/${name}.png`;
  
            return { image, name, number };
          });

          const pkList = this.state.poke_list.concat(dataList);
          this.setState({poke_list: pkList});
        } else {
          const dataList = data.results.map((e, i) => {
            const name = e.name;
            const number = i + 1;
            const image = `https://img.pokemondb.net/sprites/sun-moon/icon/${name}.png`;
  
            return { image, name, number };
          })
      
          const pkList = this.state.poke_list.concat(dataList);
          this.setState({poke_list: pkList});
        };
      })
      .catch(err => {
        console.log(err);
      })
  }

  getPk = (name) => {
    let pkUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    Axios.get(pkUrl)
      .then(response => {
        const {
          name,
          id,
          sprites,
          moves,
          types,
          stats,
        } = response.data;

        let image = `https://img.pokemondb.net/artwork/${name}.jpg`;

        const spritesArr = [sprites.back_default, sprites.back_shiny, sprites.front_default, sprites.front_shiny];
        
        const typesArr = types.map(e => {
          return e.type.name;
        });
        
        const baseStatsArr = stats.map(e => {
          const val = e.base_stat;
          const statName = e.stat.name;
          return {statName, val};
        });

        const movesArr = moves.map((e, i) => {
          const name = e.move.name;
          // if(i >= 3){
              // return {name};
          // }
          return {name};
        });
        // this.setState({select_pk: {name, id, image, sprites:spritesArr, types:typesArr, baseStatsArr, moves:movesArr}});
      })
      .catch(err => {
        console.log(err)
      })
  }

  componentDidMount () {
    this.getlist();

  }

  componentDidUpdate (prevProps, prevState) {
    console.log('this was previous state', prevState)
    console.log('this is current state', this.state)
  }

  render() {
    return (
      <>
        <Searchbar />
        <Homepage />
          <p onClick={this.getlist}>Load More</p>
        <Profile data={this.state.select_pk}/>
      </>
    );
  }
}

export default App;
