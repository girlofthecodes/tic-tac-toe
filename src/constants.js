//TODO: Gamblers 
export const TURNS = {
    X: "❌",
    O: "⚪",
};

//TODO: Posssible winner combinations
export const WINNER_COMBOS = [
//* ROWS
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //*COLUMNS
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //* DIAGONALS DOWN
    [0, 4, 8],
    [2, 4, 6],
    //*DIAGONALS UP
    [2, 4, 6],
    [0, 4, 8],
];