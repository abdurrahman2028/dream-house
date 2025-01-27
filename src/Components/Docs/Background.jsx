import React from 'react';

const Background = () => {
    return (
        <div className='fixed z-[2] w-full h-screen'>
            <div className="absolute top-[5%] w-full py-10 text-xl flex justify-center text-zinc-600 font-semibold">Documents.</div>
            <h1 className='absolute text-[13vw] text-zinc-900 leading-none tracking-tighter top-1/2 left-1/2 -translate-x-[50%] -translate-y-[65%] font-semibold'>Docs.</h1>
        </div>
    );
};

export default Background;