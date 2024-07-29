import React from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <div className='flex justify-center'>

            <div className='w-[70%] h-16 mt-8 bg-slate-700 items-center rounded-full'>

                <div className='flex justify-between items-center'>
                    <div className='mt-4 font-bold'><span className='text-red-700 ml-6'>A</span><span className='text-green-600 '>D</span><span className='text-red-700'>A</span></div>
                    <div className='mt-3 mr-6'><button className='bg-blue-700 font-bold px-3 py-2 text-white rounded-full'> <Link href="/dashboard">Connect Wallet</Link></button></div>
                </div>
            </div>
        </div>
    )
}

export default page