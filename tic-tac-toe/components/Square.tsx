import React from 'react'
import {PlayerType, SquareType} from "@/components/Board";

type SquareProps = {
    value: SquareType
    winner: SquareType
}

const squareClass = 'w-[100px] h-[100px] bg-gray-300 border border-black text-4xl font-bold'
const squareClassX = 'w-[100px] h-[100px] bg-gray-300 border border-black text-4xl font-bold text-red-500'
const squareClassO = 'w-[100px] h-[100px] bg-gray-300 border border-black text-4xl font-bold text-blue-500'

const Square = ({value, winner}: SquareProps) => {
    if (!value) {
        return <button className={squareClass} disabled={!!winner}></button>
    }

    return (
        <button className={squareClass + ' ' + (value.toLowerCase() == 'x' ? squareClassX : squareClassO)} disabled={!!winner}>{value}</button>
    )
}
export default Square
