import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='flex text-6xl font-serif text-slate-300 mt-8'>Vote without Rigging</div>
            <div className='flex mt-10'>Let&apos;s make the ballot secure and value the votes. <br className='mt-2' /> Want to learn about this secure ballot platform. Explore. </div>
            <div><button className='bg-blue-700 font-bold px-3 py-2 text-white rounded-full mt-8'>Create poll</button></div>

            <div className='mt-16 text-5xl text-slate-400'>Start Voting</div>
        </div>
    )
}

export default Hero