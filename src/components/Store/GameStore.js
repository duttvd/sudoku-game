import { create } from "zustand";
import { MODES, sudoku } from "./Sudokuutils";
import { TbDeviceIpadHorizontalMinus } from "react-icons/tb";

const initialState = {
  isStart: false,
  isPause: false,
  isComplete: false,
  pencilMode: false,
  mistakes: false,
  totalMistakes: false,
  time: 0,
  mode: "easy",
  board: Array.from({ length: 9 }, () => Array(9).fill(0)),
  qBoard: Array.from({ length: 9 }, () => Array(9).fill(0)),
  selectedCell: {
    row: null,
    col: null,
    square: null,
  },
};

const gameState = (set) => ({
  ...initialState,
  
  tryAgain: () => {},
  piPause: () => {},
  continueGame: () => {},
  togglePencilMode: () => {},
  changeQBoard: () => {},
  resetQBoard: () => {},
  quitGame: () => {},
  setSelectedCell: () => {},
  useHint: () => {},
  increaseTime: () => {},
  setState: () => {},
});

const useGame = create(gameState);
