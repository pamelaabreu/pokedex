import React, { Component } from 'react';
import './profile.css';

const Profile = props => {

    const {data} = props;
    const {name, 
            id, 
            image, 
            sprites, 
            types, 
            baseStats,
            moves} = data;

    const spritesImg = sprites.map((e, i) => {
        return <img src={e} key={i} alt={name}></img>
    });

    // Will need to do logic for finding the colors for all the types LOL
    const typeWord = types.map((e, i) => {
        return (
            <div className='types'>
                <h3>{e}</h3>
            </div>
            );
    });

    const bsArr = Object.entries(baseStats);
    const bsCard = bsArr.map((v, i,) => {
        let key= v[0];
        let value = v[1];
        return (
            <>
            <div className='bs-card'>
                <h1 className='bs-info'>{key}</h1>
                <h1 className='bs-num'>{value}</h1>
            </div>
            </>
            );
    });

    const moveButton = moves.map((v, i) => {
        return <h1>{v.name}</h1>
    })

    return (
        <>
        <div className='p-container'>
            <h1>#{id} - {name}</h1>
            <img src={image} alt={name}></img>
            {spritesImg}
            {typeWord}
            
            <h1>Base Stats</h1>
            <div className='baseStats'>
            {bsCard}
            </div>

            <h1>Moves</h1>
            <div>
                {moveButton}
            </div>
            
        </div>
        
        </>
    );
}

export { Profile };

// select_pk: {
//     name:'bulbasaur',
//     id: 1,
//     image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
//     sprites: ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"],
//     types: ['poison', 'grass'],
//     baseStats: {
//       hp: 45,
//       attack: 49,
//       defense: 49,
//       spAttack: 65,
//       spDefense: 65,
//       speed: 45,
//     },
//     moves: {
//       name: 'Razor Wind',
//       type: 'physical',
//       power: 50,
//       pp: 30,
//     }