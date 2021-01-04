import React from 'react';

const style = {
    borderWidth:'2px',
    width:'45px',
    height:'45px',
    borderRadius: '50px',
    outline: 'none'
};

const Tile = ({color, onClick}) => {
    return(
        <button style={{background:color,...style}} onClick={onClick}></button>
    );
};

export default Tile;