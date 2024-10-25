/*
Todo: Square (cuadrado): 
    & children: lo que envuelve el elemento
    & updateBoard: Actualizara el tablero
    & index: saber cual es el indice del cuadrado 
*/

export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? "is-selected" : ""}`;
    const handleClick = () => {
        updateBoard(index);
    };
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    );
};

