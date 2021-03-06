import Axios from 'axios';
import React, { Component } from 'react';
import './profile.css';
import Modal from './modal';

class Profile extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name:'',
            id: 0,
            image: '',
            sprites: [],
            types: [],
            baseStats: [],
            moves: [],
            show: false,
            moveInfo: {}
          }
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
              return {name};
            });

            this.setState({
                name: name, 
                id: id, 
                image: image, 
                sprites: spritesArr, 
                types: typesArr, 
                baseStats: baseStatsArr, 
                moves: movesArr});
          })
          .catch(err => {
            console.log(err)
          })
    }

    getMove = (name) => {
        const moveUrl = `https://pokeapi.co/api/v2/move/${name}/`;
        Axios.get(moveUrl)
            .then(response => response.data)
            .then(data => {
                const {power, pp, type} = data;
                this.setState({
                    moveInfo:{
                        type: type.name,
                        power,
                        pp
                }})
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount () {
        this.getPk(this.props.name);
    }
 
    spritesImg () {
        const spritesImg = this.state.sprites.map((e, i) => {
            return <img className='sprite-img' src={e} key={i} alt={this.state.name}></img>
        });

        return spritesImg;
    }

    typeWord () { 
        const typeWord = this.state.types.map((e, i) => {
            return <h3 key={i} className={['type-text'].concat(e).join(' ')}>{e}</h3>
        });

        return typeWord;
    }

    bsCard () {
        const bsCard = this.state.baseStats.map((v, i,) => {
        let key = v.statName;
        let value = v.val;
            return (
                <>
                    <div key={i} className='bs-card'>
                        <h1 className='bs-info'>{key}</h1>
                        <h1 className='bs-num'>{value}</h1>
                    </div>
                </>
            );
        });

        return bsCard;
    }

    render () {
        const {moves, moveInfo} = this.state;
        return (
        <>
            <div className='p-container'>
                <h1 className='home-button' onClick={this.props.onClick}>Home >> </h1>
                <h1 className='pk-name'>{this.state.name}</h1>
                <h1 className='name-header'># {this.state.id} - {this.state.name}</h1>

                <div className='img-container'>
                    <div className='pk-img-col'>
                        <img className='pk-img' src={this.state.image} alt={this.state.name}></img>
                        <div className='types'>
                            {this.typeWord()}
                        </div>
                    </div>
                    <div className='sprite-col'>
                        {this.spritesImg()}
                    </div>
                </div>
                
                <h1 className='bs-header'>Base Stats</h1>
                <div className='bs-container'>
                    {this.bsCard()}
                </div>

                <h1 className='bs-header'>Moves</h1>
                <div className='m-container'>
                    <Modal click={this.getMove} data={{moves, moveInfo}}/>
                </div>

            </div>
        </>
        );
    }
};

export default Profile;
