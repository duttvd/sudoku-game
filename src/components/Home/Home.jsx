import React from 'react';

function Home() {
  return (
    <>
      <span id='heading' className=' text-3xl font-bold'>Sudoku Game</span>
      <div className=' flex flex-col items-center justify-center p-10 gap-5'>
        <button className='bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90'> Start New</button>
        <button className='bg-slate-900 p-3 rounded-md hover:bg-slate-800 active:scale-90'> Continue</button>DIFFICULTY
        <div className='flex items-center gap-5'>
           <label htmlFor='modes'></label>
           <select id='mode' className='bg-slate-900 p-5 rounded-lg' defaultValue={'Easy'}>
           <option value='Veryeasy'> Very Easy</option>
           <option value='Easy'>Easy</option>
           <option value='Medium'>Medium</option>
           <option value='hard'> Hard</option>
           <option value='Extreme'>Extreme</option>
           </select>
        </div>
      </div>
    </>
  );
}

export default Home;
