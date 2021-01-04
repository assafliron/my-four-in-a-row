import React, {useState} from 'react';
import Layout from './Layout';

const EMPTY = '#DEB887';
const PLAYER_ONE ='#FF0000'; //red
const PLAYER_TWO ='#4169E1'; //blue

const Logic = () => {
    const [turn,setTurn] = useState(PLAYER_ONE);
    const [boardTiles,setBoardTiles] = useState(Array(49).fill(EMPTY));
    
    const checkRow = i =>{
        if (i%7<4 && boardTiles[i]!==EMPTY && boardTiles[i]===boardTiles[i+1] && boardTiles[i]===boardTiles[i+2] && boardTiles[i]===boardTiles[i+3]){
            return boardTiles[i];
        }
    };

    const checkColumn = i => {
        if (i<28 && boardTiles[i]!==EMPTY && boardTiles[i]===boardTiles[i+7] && boardTiles[i]===boardTiles[i+14] && boardTiles[i]===boardTiles[i+21]){
            return boardTiles[i];
        }
    };

    const checkRightDiagonal = i => {
        if (i%7<4 && i<28 && boardTiles[i]!==EMPTY && boardTiles[i]===boardTiles[i+8] && boardTiles[i]===boardTiles[i+16] && boardTiles[i]===boardTiles[i+24]){
            return boardTiles[i];
        }
    };

    const checkLeftDiagonal = i => {
        if(i<28 && i%7>2 && boardTiles[i]!==EMPTY && boardTiles[i]===boardTiles[i+6] && boardTiles[i]===boardTiles[i+12] && boardTiles[i]===boardTiles[i+18]){
            return boardTiles[i];
        }
    }

    const checkWinner = tiles =>{
        for(let i=0; i<49; i++){
            const rowCheck = checkRow(i);
            const columnCheck = checkColumn(i);
            const rightDiagCheck = checkRightDiagonal(i);
            const leftDiagCheck = checkLeftDiagonal(i);
            if(rowCheck){
                return rowCheck;
            }
            if(columnCheck){
                return columnCheck;
            }
            if(rightDiagCheck){
                return rightDiagCheck;
            }
            if(leftDiagCheck){
                return leftDiagCheck;
            }
        }
        return null;
    };

    const winner = checkWinner();

    const tileOnClick = i => {
        if(winner){
            return;
        }
        if(boardTiles[i] !== EMPTY){
            if(i>6){
                return tileOnClick(i-7);
            }
            return;
        } else {
            if(i<42 && boardTiles[i+7]===EMPTY){
                return tileOnClick(i+7);
            }
            const newBoardTiles = [...boardTiles];
            newBoardTiles[i] = turn;
            setBoardTiles(newBoardTiles);
            setTurn(turn===PLAYER_ONE? PLAYER_TWO : PLAYER_ONE);
        }


    };

    const resetOnClick = () =>{
        setBoardTiles(Array(49).fill(EMPTY));
    }

    return <Layout 
        boardTiles={boardTiles} 
        tileOnClick={tileOnClick} 
        resetOnClick={resetOnClick} 
        winner={winner}
    />;
           
};

export default Logic;