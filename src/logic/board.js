import { WINNER_COMBOS } from "../constants";

//TODO: Se revisan todas las combinaciones posibles ganadoras para comprobar si gano X o Y 

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo;
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a];
        }
    }
    //* Si no hay ganador
    return null;
};

export const checkEndGame = (newBoard) => {
    //* Se revisa si hay un empate si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square !== null);
};