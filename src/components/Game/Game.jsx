import React from 'react';
import Bord from '../Board/Bord';
import { LuLogOut } from 'react-icons/lu';
import { PiAlignCenterVerticalSimpleThin, PiAnchor, PiPause, PiPencilLine } from 'react-icons/pi';
import { BiBulb } from 'react-icons/bi';

function Game() {
  return (
    <div className='flex flex-col justify-center items-center gap-1'>
     <Bord/>
    <div className='flex items-center w-full justify-center gap-3'>
    <button className='bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90'><LuLogOut/></button>
    <button className='bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90'><PiPause/></button>
    <button className='bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90'> Reset</button>
     <button className='bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90'><BiBulb/></button>
    <button className='bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90'><PiPencilLine/></button>   
    </div>
    </div>
  );
}

export default Game;
