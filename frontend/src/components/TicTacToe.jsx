import React, { useState, useEffect } from 'react';
import { X, Circle, RotateCcw, Trophy, Frown } from 'lucide-react';
import { Button } from './ui/button';

const TicTacToe = ({ onClose }) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [scores, setScores] = useState({ player: 0, ai: 0, draws: 0 });

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return null;
  };

  const minimax = (squares, depth, isMaximizing) => {
    const result = checkWinner(squares);
    if (result?.winner === 'O') return 10 - depth;
    if (result?.winner === 'X') return depth - 10;
    if (squares.every(s => s !== null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'O';
          bestScore = Math.max(bestScore, minimax(squares, depth + 1, false));
          squares[i] = null;
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < 9; i++) {
        if (!squares[i]) {
          squares[i] = 'X';
          bestScore = Math.min(bestScore, minimax(squares, depth + 1, true));
          squares[i] = null;
        }
      }
      return bestScore;
    }
  };

  const getBestMove = (squares) => {
    let bestScore = -Infinity;
    let bestMove = null;
    
    for (let i = 0; i < 9; i++) {
      if (!squares[i]) {
        squares[i] = 'O';
        const score = minimax(squares, 0, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) return;
    
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  // AI move
  useEffect(() => {
    if (!isXNext && !winner && board.some(s => s === null)) {
      const timer = setTimeout(() => {
        const newBoard = [...board];
        const move = getBestMove(newBoard);
        if (move !== null) {
          newBoard[move] = 'O';
          setBoard(newBoard);
          setIsXNext(true);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isXNext, board, winner]);

  // Check for winner
  useEffect(() => {
    const result = checkWinner(board);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
      setScores(prev => ({
        ...prev,
        player: result.winner === 'X' ? prev.player + 1 : prev.player,
        ai: result.winner === 'O' ? prev.ai + 1 : prev.ai
      }));
    } else if (board.every(s => s !== null)) {
      setWinner('draw');
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }));
    }
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setWinningLine([]);
  };

  const renderSquare = (index) => {
    const isWinningSquare = winningLine.includes(index);
    return (
      <button
        key={index}
        onClick={() => handleClick(index)}
        className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center text-4xl font-bold border-2 
          ${isWinningSquare ? 'bg-green-100 dark:bg-green-900/30 border-green-500' : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'}
          hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200
          ${!board[index] && !winner ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
        `}
        disabled={!!board[index] || !!winner}
        data-testid={`square-${index}`}
      >
        {board[index] === 'X' && (
          <X className={`w-12 h-12 ${isWinningSquare ? 'text-green-600' : 'text-blue-600'} animate-pop`} />
        )}
        {board[index] === 'O' && (
          <Circle className={`w-10 h-10 ${isWinningSquare ? 'text-green-600' : 'text-red-500'} animate-pop`} />
        )}
      </button>
    );
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      data-testid="tictactoe-modal"
    >
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl max-w-md w-full mx-4 animate-slideUp">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Tic Tac Toe
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            data-testid="close-game"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Scoreboard */}
        <div className="flex justify-center gap-6 mb-6 text-center">
          <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
            <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">You (X)</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{scores.player}</div>
          </div>
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Draws</div>
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">{scores.draws}</div>
          </div>
          <div className="px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-xl">
            <div className="text-xs text-red-600 dark:text-red-400 font-medium">AI (O)</div>
            <div className="text-2xl font-bold text-red-600 dark:text-red-400">{scores.ai}</div>
          </div>
        </div>

        {/* Game Board */}
        <div className="flex justify-center mb-6">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(renderSquare)}
          </div>
        </div>

        {/* Game Status */}
        <div className="text-center mb-4">
          {winner === 'X' && (
            <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-xl animate-bounce">
              <Trophy className="w-6 h-6" />
              You Win!
            </div>
          )}
          {winner === 'O' && (
            <div className="flex items-center justify-center gap-2 text-red-500 font-bold text-xl">
              <Frown className="w-6 h-6" />
              AI Wins!
            </div>
          )}
          {winner === 'draw' && (
            <div className="text-gray-600 dark:text-gray-400 font-bold text-xl">
              It's a Draw!
            </div>
          )}
          {!winner && (
            <div className="text-gray-600 dark:text-gray-400">
              {isXNext ? "Your turn (X)" : "AI is thinking..."}
            </div>
          )}
        </div>

        {/* Reset Button */}
        <div className="flex justify-center">
          <Button
            onClick={resetGame}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full flex items-center gap-2"
            data-testid="reset-game"
          >
            <RotateCcw className="w-4 h-4" />
            New Game
          </Button>
        </div>

        {/* Easter egg hint */}
        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-4">
          You found the secret game! 🎮
        </p>
      </div>
    </div>
  );
};

export default TicTacToe;
