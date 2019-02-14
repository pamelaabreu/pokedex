import React, { Component } from 'react';
import './profile.css';

const Profile = props => {

    const {data} = props;
    console.log('inside the profile',data);
    const {name, 
            id, 
            image, 
            sprites, 
            types, 
            baseStatsArr,
            moves} = data;

    const spritesImg = sprites.map((e, i) => {
        return <img className='sprite-img' src={e} key={i} alt={name}></img>
    });

    const typeWord = types.map((e, i) => {
        return (
                <h3 key={i} className='type-text'>{e}</h3>
            );
    });

    // Basestat is an array of objects now, fix this
    // const bsCard = baseStatsArr.map((v, i,) => {
    //     let key= v.statName;
    //     let value = v.val;
    //     return (
    //         <>
    //         <div className='bs-card'>
    //             <h1 className='bs-info'>{key}</h1>
    //             <h1 className='bs-num'>{value}</h1>
    //         </div>
    //         </>
    //         );
    // });

    const moveButton = moves.map((v, i) => {
        return <h1 key={i} className='m-button'>{v.name}</h1>
    })

    return (
        <>
        <div className='p-container'>
            <h1 className='home-button'>Home >> </h1>
            <h1 className='pk-name'>{name}</h1>
            <h1 className='name-header'># {id} - {name}</h1>

            <div className='img-container'>
                <div className='pk-img-col'>
                    <img className='pk-img' src={image} alt={name}></img>
                    <div className='types'>
                        {typeWord}
                    </div>
                </div>
                <div className='sprite-col'>
                    {spritesImg}
                </div>
            </div>
            
            <h1 className='bs-header'>Base Stats</h1>
            <div className='bs-container'>
                {/* {bsCard} */}
            </div>

            <h1 className='bs-header'>Moves</h1>
            <div className='m-container'>
                {moveButton}
            </div>
            
        </div>
        
        </>
    );
}

export { Profile };
