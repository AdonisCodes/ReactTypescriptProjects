import {PlayerType, SquareType} from "@/components/Board";

export const calculateWinner = (squares: SquareType[]): PlayerType | null => {
    const lines = [
        [0, 1, 2], // Horizontal
        [3, 4, 5], // Horizontal
        [6, 7, 8], // Horizontal
        [0, 3, 6], // Vertical
        [1, 4, 7], // Vertical
        [2, 5, 8], // Vertical
        [0, 4, 8], // Diagonal
        [2, 4, 6], // Diagonal
    ]

    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // We just do a simple boolean match over the 3 items, where the first tiem equals to the second item & the first & second item == the third item
            return squares[a] as PlayerType
        }
    }
    return null
}