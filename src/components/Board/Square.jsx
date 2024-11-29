import React from 'react';
import Cell from './Cell';

function Square({ row, col }) {
  const squares = Array.from({ length: 3 }, () => Array(3).fill(null)); 
  return (
    <div className="box w-full h-full flex flex-col gap-1">
      {squares.map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-1 w-full h-full">
          {squares[rowIndex].map((_, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              row={row * 3 + rowIndex} 
              col={col * 3 + colIndex} 
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Square;
