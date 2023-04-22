import React from 'react'
import BadgeAvatars from './profile'
import { BiCheckDouble } from 'react-icons/bi'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export const Chat: React.FC<{}> = () => {
    return (
        <>
            <div className='sm:w-[100%] w- border-l-[2px] overflow-y-scroll relative'>
                <div className='py-3 px-5 border-b-[2px] flex items-center fixed bg-white w-full'>
                    <BadgeAvatars size={48}/>
                    <div className='ml-3'>
                        <div className='text-xl font-[400]'>
                            Daiz Xchange Trading Agent
                        </div>
                        <div className='text-xs text-[#a7a9ac]'>
                            Last seen yesterday
                        </div>            
                    </div>
                </div>

                <div className='mt-[70px]'>
                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#e5e7eb] rounded-2xl px-3 py-1 mt-3 text-xs'>
                            March 18, 2023
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center mt-3'>
                                {/* <BadgeAvatars size={40}/> */}
                                <div className='ml-3 p-2 bg-blue-300 rounded-b-2xl rounded-tr-2xl max-w-[80%] text-sm'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                </div>
                                
                            </div>
                            <div className='text-xs px-3 mt-1 font-medium text-gray-500'>
                                11:45 PM
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-end justify-end mt-2 mr-3'>
                                <BadgeAvatars size={40}/>
                                <div className='ml-3 p-2 bg-blue-300 rounded-t-2xl rounded-bl-2xl max-w-[80%] text-sm'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                </div>
                            </div>
                            <div className='text-xs px-3 mt-1 font-medium text-gray-500 flex justify-end items-center'>
                                11:47 PM
                                <BiCheckDouble size={20} className='ml-1'/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex justify-center'>
                            <div className='bg-[#e5e7eb] rounded-2xl px-3 py-1 mt-3 text-xs'>
                            March 19, 2023
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center mt-3'>
                                {/* <BadgeAvatars size={40}/> */}
                                <div className='ml-3 p-2 bg-blue-300 rounded-b-2xl rounded-tr-2xl max-w-[80%] text-sm'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                </div>
                                
                            </div>
                            <div className='text-xs px-3 mt-1 font-medium text-gray-500'>
                                3:45 PM
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex items-end justify-end mt-2 mr-3'>
                                <BadgeAvatars size={40}/>
                                <div className='ml-3 p-2 bg-blue-300 rounded-t-2xl rounded-bl-2xl max-w-[80%] text-sm'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                </div>
                            </div>
                            <div className='text-xs px-3 mt-1 font-medium text-gray-500 flex justify-end items-center'>
                                8:27 PM
                                <BiCheckDouble size={20} className='ml-1'/>
                            </div>
                        </div>
                        <div className='mb-[70px]'>
                            <div className='flex items-end justify-end mt-2 mr-3'>
                                <BadgeAvatars size={40}/>
                                <div className='ml-3 p-2 bg-blue-300 rounded-t-2xl rounded-bl-2xl max-w-[80%] text-sm'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, quas architecto! Placeat voluptas earum cupiditate dicta ea ipsa, odio maiores maxime hic cumque a. Unde beatae iste consequatur voluptatibus laboriosam!
                                </div>
                            </div>
                            <div className='text-xs px-3 mt-1 font-medium text-gray-500 flex justify-end items-center'>
                                8:27 PM
                                <BiCheckDouble size={20} className='ml-1'/>
                            </div>
                        </div>
                    </div>
                    
                    <div className='w-full'>
                        <div className='fixed bg-[#e5e7eb] w-full bottom-0 p-2 flex'>
                            <input className='outline-none w-full sm:w-3/4   py-2 px-2 rounded-xl' />
                            <button className='ml-3 rounded-xl'>
                                <BsFillArrowRightCircleFill size={30}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}