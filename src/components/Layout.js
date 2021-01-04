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
    gridTemplate: 'repeat(7, 1fr) / repeat(7, 1fr)'
};

const resetStyle = {
    borderWidth:'2px',
    width:'55px',
    height:'25px',
    borderRadius: '20px',
    outline: 'none',
    background: '#7FFFD4'
};

const Layout = ({boardTiles, tileOnClick, winner, resetOnClick}) => {
    const renderedTiles = boardTiles.map((tile, i) => (
        <Tile key={i} onClick={() => tileOnClick(i)} color={tile}/>
    ));
    return(
        <>
        <div style={boardStyle}>
            {renderedTiles}
        </div>
        <div >
            <button onClick={resetOnClick} style={resetStyle}>Reset</button>
            <p>{winner ? `The winner is: ${winner===PLAYER_ONE ? 'Red Player' : 'Blue Player'}`: ''}</p>
        </div>
        </>
    );
};

export default Layout;