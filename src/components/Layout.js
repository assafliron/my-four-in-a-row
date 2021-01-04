import React from 'react';
import Tile from './Tile';

const PLAYER_ONE ='#FF0000'; //red

const boardStyle = {
    background: '#B8860B',
    border: '1px solid darkborwn',
    borderRadius: '12px',
    width: '350px',
    height: '350px',
    margin: '5px',
    display: 'grid',
    gridTemplate: 'repeat(7, 1fr) / repeat(7, 1fr)',
};

const resetStyle = {
    borderWidth:'2px',
    width:'100px',
    height:'30px',
    borderRadius: '20px',
    outline: 'none',
    background: '#7FFFD4',
};

const pStyle = {
    fontFamily: 'courier',
    fontSize: '160%',
    textAlign: 'center'
};

const Layout = ({boardTiles, tileOnClick, winner, resetOnClick}) => {
    const renderedTiles = boardTiles.map((tile, i) => (
        <Tile key={i} onClick={() => tileOnClick(i)} color={tile}/>
    ));
    return(
        <>
        <h1 style={{textAlign: 'center'}}>Four In A Row </h1>
        <h3 style={{textAlign: 'center'}}>The Rules:</h3>
        <p  style={{textAlign: 'center'}}>
            It is the goal of the game to connect four of your tokens in a line.
            All directions (vertical, horizontal, diagonal) are allowed.
            Players take turns putting one of their tokens into one of the seven slots.
            A token falls down as far as possible within a slot.
        </p>
        <div style={boardStyle}>
            {renderedTiles}
        </div>
        <div >
            <button onClick={resetOnClick} style={resetStyle}>New Game</button>
            <p style={pStyle}>{winner ? `The winner is: ${winner===PLAYER_ONE ? 'Red Player' : 'Blue Player'}`: ''}</p>
        </div>
        </>
    );
};

export default Layout;