import React from 'react';
import { MODES } from '../Store/SudokuUtils.js';
import { useNavigate } from 'react-router-dom';

function Home() {
  const {startGame} = useGame()
  const Navigate = useNavigate()
  const modeRef = useRef()
  function handleStart(){
    startGame(modeRef.current.value)
    localStorage.setItem("mode",modeRef.current.value)
    Navigate('/game')

  }

  return (
    <>
      <span id="heading" className="text-3xl font-bold">Sudoku Game</span>
      <div className="flex flex-col items-center justify-center p-10 gap-5">
      <button
          onClick={handleStart}
          ref={(el) => butonsRef.current.push(el)}
          className="option bg-slate-900 p-3 rounded-md hover:bg-slate-800  active:scale-90"
        >
          Start New
        </button>
        <button 
          className="bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90" 
          onClick={handleContinue}
        >
          Continue
        </button>
        <span>DIFFICULTY</span>
        <div className="flex items-center gap-5">
          <label htmlFor="modes"></label>
          <select id="mode" ref={modeRef} className="bg-slate-900 p-5 rounded-lg" defaultValue="Easy">
            <option value="Veryeasy">Very Easy</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
            <option value="Extreme">Extreme</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Home;
