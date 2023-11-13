"use client";

import React, {useEffect, useState} from 'react'
import Square from "@/components/Square";
import {calculateWinner} from "@/app/utils";

export type PlayerType = 'X' | 'O' | 'Draw'
export type SquareType =  PlayerType | null

const Board = () => {
    const [squares, setSquares] = React.useState<SquareType[]>(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<PlayerType>(
        Math.random() < 0.5 ? 'X' : 'O'
    )
    const [winner, setWinner] = useState<PlayerType | null>(null)

    const resetGame = () => {
        setSquares(Array(9).fill(null))
        setWinner(null)
        setCurrentPlayer(Math.random() < 0.5 ? 'X' : 'O')
    }

    function setSquareValue(i: number) {
        const newSquares = squares.map((val, index) => {
            if (i === index) {
                return currentPlayer
            }
            return val
        })
        setSquares(newSquares)
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
    }

    useEffect(() => {
        const winner = calculateWinner(squares)

        if (winner) {
            setWinner(winner)
        }

        if (!winner && !squares.includes(null)) {
            setWinner('Draw')
        }
    }, [currentPlayer, squares]);

    return (
        <>
            <p>Hey {currentPlayer}, it is your turn!</p>

            {winner && winner != 'Draw' && (
                <p>Winner is {winner}</p>
            ) || winner && winner == 'Draw' && (
                <p>Draw</p>
            )}
            <div className={'grid gap-1 grid-cols-3 grid-rows-3'}>
                {Array(9).fill(null).map((_, i) => (
                    <div
                        onClick={() => setSquareValue(i)}
                        key={i}
                    >
                    <Square winner={winner} value={squares[i]} />
                    </div>
                ))}
            </div>
            <button onClick={resetGame} className={'bg-red-600 rounded-md p-3'}>Reset Game</button>
        </>
    )
}
export default Board
