import { Turn, PlayerSymbol } from '@/pages/sample/tic-tac-toe/TicTacToePage';

// type PlayerSymbol = 'X' | 'O' | null;

const initialGameBoard: PlayerSymbol[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

type Props = {
  onSelectSquare: (rowIndex: number, cellIndex: number) => void,
  turn: Turn[]
}

const GameBoard = (prop: Props) => {
  const gameBoard = initialGameBoard;

  for (const turn of prop.turn) {
    const { row, cell } = turn.square;
    gameBoard[row][cell] = turn.player;
  }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIndex: number, cellIndex: number) => {
  //   setGameBoard((prevGameBo  ard) => {
  //     // 상태감지를 위해 깊은복사를 통해 독립적인 새로운 배열을 생성. 
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedBoard[rowIndex][cellIndex] = prop.activePlayerSymbol;
  //     return updatedBoard;

  //   });

  //   prop.onSelectSquare();
  // }

  return (
    <ol id='game-board'>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => prop.onSelectSquare(rowIndex, cellIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}

export default GameBoard