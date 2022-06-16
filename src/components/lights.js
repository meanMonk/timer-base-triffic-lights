import React, {useState} from 'react';

function Lights({light, count}) {

  return <div className="container">
    <div className="flex flex-col justify-center items-center m-5 gap-5">
      <div className={`rounded-full flex justify-center items-center text-xl w-20 h-20 ${light === 0 ? 'bg-red-600' : 'bg-white'}`}>
        { light === 0 ? count: null}
      </div>
      <div className={`rounded-full flex justify-center items-center text-xl w-20 h-20 ${light === 1 ? 'bg-yellow-300' : 'bg-white'}`}>
        { light === 1 ? count: null}
      </div>
      <div className={`rounded-full flex justify-center items-center text-xl w-20 h-20 ${light === 2 ? 'bg-green-300' : 'bg-white'}`}>
        { light === 2 ? count: null}
      </div>
    </div>
  </div>
}

export default Lights;
