import React, { useEffect } from 'react';
import Board from '../Board/Board';
import { LuLogOut } from 'react-icons/lu';
import {PiPause, PiPencilLine } from 'react-icons/pi';
import { BiBulb } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';




function Game() {
  const Navigate = useNavigate()
  const {isStart} = useGame()
  useEffect(()=>{
  if(!isStart){
    Navigate('/')
  }
},[])
  return (
    <div className='flex flex-col justify-center items-center gap-1'>
     <Board/>
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
