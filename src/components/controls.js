import React, { useState } from 'react';

function Controls({
  onStart,
  onEnd,
}) {

  return <div className="container">
    <div className="flex flex-col justify-center items-center m-5 gap-5">
      <button onClick={() => {
        console.log('on Start');
        onStart();
      }} className='rounded-sm p-2 bg-blue-400'>START</button>
      <button onClick={() => {
        console.log('on Start')
        onEnd()
      }} className='rounded-sm p-2 bg-grey-400'>STOP</button>
    </div>
  </div>
}

export default Controls;
