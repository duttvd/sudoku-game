import React from 'react';
import Square from './Square';

function Bord() {
  const Pause = true;
  const over = false;
  const numbors = Array(9).fill(null);
  const squares = Array.from({ length: 3 }, () => Array(3).fill(null)); 

  return (
    <div className="flex flex-col items-center w-screen h-screen text-center md:w-[600px] md:h-[600px] p-5 gap-4 relative">
      
      {Pause && (
        <span className="text-6xl absolute bg-slate-700 border z-10 shadow-lg border-black p-10 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Pause
        </span>
      )}

    
      {over && (
        <div className="text-2xl absolute bg-slate-700 border w-full z-10 shadow-lg border-black p-10 rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span>All Mistakes Used</span>
          <div className="flex items-center p-5 justify-around">
            <button className="bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90">Try Again</button>
            <button className="bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90">Start New</button>
          </div>
        </div>
      )}

      
      <div className="flex flex-col gap-2 w-full h-full">
        {squares.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 w-full h-full">
            {row.map((_, colIndex) => (
              <Square key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} />
            ))}
          </div>
        ))}
      </div>

      
      <div className="flex justify-around mt-4 w-full">
        {numbors.map((_, i) => (
          <span
            key={i}
            className="text-slate-200 bg-neutral-900 shadow-lg p-2 outline-1 hover:outline rounded-md text-sm cursor-pointer">
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Bord;
