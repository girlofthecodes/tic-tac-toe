import { Square } from "./Square";

export const Game = ({board, updateBoard}) => {
    return (
    <section className="game">
        {board.map((squeare, index) => {
            return (
                <Square key={index} index={index} updateBoard={updateBoard}>
                    {squeare}
                </Square>
                );
            })
        }
    </section>
    )
}