// import React from 'react'

// const Cards = () => {
//     return (
//         <div className='flex justify-center mt-10'>
//             <div className='flex flex-st gap-16 justify-around'>

//                 <div className='flex-row size-64 bg-red-400'>

//                     <div>Beauty Pagentry</div>
//                     <div>A competition that has something something Lorem ipsum dolor sit amet.</div>
//                     <div className='flex-row'>
//                         <div className='px-2 py-1 gap-2'>Wed Nov23, 24</div>
//                         <div className='flex-row'>hh</div>
//                     </div>
//                     <div>E</div>
//                 </div>
//                 <div className='size-64 bg-red-400'>...</div>
//                 <div className='size-64 bg-red-400'>...</div>
//                 <div className='size-64 bg-red-400'>...</div>
//             </div>

//         </div>
//     )
// }

// export default Cards


// import React from 'react';

// const Cards = () => {
//     return (
//         <div className='flex justify-center mt-10'>
//             <div className='flex gap-4'>

//                 <div className='card w-72 h-60 bg-slate-800 p-4'>
//                     <h2 className='text-xl font-bold'>Beauty Pagentry</h2>
//                     <p className='text-sm mt-2 mb-2'>Lorem ipsum dolor sit amet elit. Repellendus, cumque. Voluptates iste.</p>
//                     <div className='flex justify-around mt-2'>
//                         <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Wed Nov 23, 24</div>
//                         <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Address</div>
//                     </div>
//                     <button className='w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600'>Enter</button>
//                 </div>

//                 {/* Add more card components as needed */}
//                 <div className='card size-64 bg-slate-800 p-4'>
//                     <div className='flex flex-col items-center'>

//                         <div className='rounded-full w-60 h-32'><img src='https://avatars.githubusercontent.com/u/78686630?v=4' alt='Image 1' className='rounded-lg mb-2' /></div>
//                         {/* <div className='w-44 h-32'><img src='https://avatars.githubusercontent.com/u/78686630?v=4' alt='Image 1' className='rounded-lg mb-2' /></div> */}

//                     </div>
//                 </div>

//                 <div className='card w-72 h-60 bg-slate-800 p-4'>
//                     <h2 className='text-xl font-bold'>Beauty Pagentry</h2>
//                     <p className='text-sm mt-2 mb-2'>Lorem ipsum dolor sit amet elit. Repellendus, cumque. Voluptates iste.</p>
//                     <div className='flex justify-around mt-2'>
//                         <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Wed Nov 23, 24</div>
//                         <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Address</div>
//                     </div>
//                     <button className='w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600'>Enter</button>
//                 </div>


//                 <div className='card size-64 bg-slate-800 p=4'>
//                     <div className='flex flex-col items-center'>

//                         <div className='rounded-full w-60 h-32'><img src='https://avatars.githubusercontent.com/u/78686630?v=4' alt='Image 1' className='rounded-lg' /></div>
//                         {/* <div className='w-44 h-32'><img src='https://avatars.githubusercontent.com/u/78686630?v=4' alt='Image 1' className='rounded-lg mb-2' /></div> */}

//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default Cards;



import React from 'react';

const Cards = () => {
    return (
        <div className='flex justify-center mt-10 px-4'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='card w-72 h-60 bg-slate-800 p-4'>
                    <h2 className='text-xl font-bold'>Beauty Pagentry</h2>
                    <p className='text-sm mt-2 mb-2'>Lorem ipsum dolor sit amet elit. Repellendus, cumque. Voluptates iste.</p>
                    <div className='flex justify-around mt-2'>
                        <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Wed Nov 23, 24</div>
                        <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Address</div>
                    </div>
                    <button className='w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600'>Enter</button>
                </div>

                <div className='card w-72 h-60 bg-slate-800 p-4'>
                    <div className='flex flex-col items-center'>
                        {/* <div className='rounded-full w-60 h-32'>
                            <img src='https://avatars.githubusercontent.com/u/78686630?v=4' alt='Image 1' className='rounded-lg mb-2' />
                        </div> */}
                    </div>
                </div>

                <div className='card w-72 h-60 bg-slate-800 p-4'>
                    <h2 className='text-xl font-bold'>Beauty Pagentry</h2>
                    <p className='text-sm mt-2 mb-2'>Lorem ipsum dolor sit amet elit. Repellendus, cumque. Voluptates iste.</p>
                    <div className='flex justify-around mt-2'>
                        <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Wed Nov 23, 24</div>
                        <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Address</div>
                    </div>
                    <button className='w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600'>Enter</button>
                </div>

                <div className='card w-72 h-60 bg-slate-800 p-4'>
                    <div className='flex flex-col items-center'>
                        {/* <div className='rounded-full w-60 h-32'>
                            <img src='https://avatars.githubusercontent.com/u/78686630?v=4' alt='Image 1' className='rounded-lg mb-2' />
                        </div> */}
                    </div>
                </div>

                <div className='card w-72 h-60 bg-slate-800 p-4'>
                    <h2 className='text-xl font-bold'>Beauty Pagentry</h2>
                    <p className='text-sm mt-2 mb-2'>Lorem ipsum dolor sit amet elit. Repellendus, cumque. Voluptates iste.</p>
                    <div className='flex justify-around mt-2'>
                        <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Wed Nov 23, 24</div>
                        <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Address</div>
                    </div>
                    <button className='w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600'>Enter</button>
                </div>

                <div className='card w-72 h-60 bg-slate-800 p-4'>
                    <div className='flex flex-col items-center'>
                        {/* <div className='rounded-full w-60 h-32'>
                            <img src='https://avatars.githubusercontent.com/u/78686630?v=4' alt='Image 1' className='rounded-lg mb-2' />
                        </div> */}
                    </div>
                </div>

                <div className='card w-72 h-60 bg-slate-800 p-4'>
                    <h2 className='text-xl font-bold'>Beauty Pagentry</h2>
                    <p className='text-sm mt-2 mb-2'>Lorem ipsum dolor sit amet elit. Repellendus, cumque. Voluptates iste.</p>
                    <div className='flex justify-around mt-2'>
                        <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Wed Nov 23, 24</div>
                        <div className='text-sm px-2 py-3 bg-slate-900 rounded-full'>Address</div>
                    </div>
                    <button className='w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600'>Enter</button>
                </div>

                <div className='card w-72 h-60 bg-slate-800 p-4'>
                    <div className='flex flex-col items-center'>
                        {/* <div className='rounded-full w-60 h-20'>
                            <img src='https://avatars.githubusercontent.com/u/78686630?v=4' alt='Image 1' className='rounded-lg mb-2' />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
