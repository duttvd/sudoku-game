import React from 'react';

function Cell({ row, col }) {
  return (
    <div
      onClick={() => console.log(`Row: ${row}, Col: ${col}`)}
      className="call select-none flex items-center justify-center cursor-pointer bg-slate-800
    w-full h-full rounded-md hover:outline outline-[2px]"
    >1
      
    </div>
  );
}

export default Cell;
