import React from 'react'
import CC from '../assets/5124556.jpg';
import CircularIndeterminate from './progress';

export const Welcome: React.FC<{}> = () => {
    const [displayName, setDisplayName] = React.useState<string>('')

    console.log(displayName)
    const captureUsername = () => {

    }
    return (
        <>
            <div className='flex items-center justify-center w-3/4 sm:w-[100%]'>
                <img src={CC} className='w-[40%]'/>
                <div className='ml-3'>
                    <div className='font-bold text-2xl'>
                        Welcome to DaizXchange Customer Support
                    </div>
                    <div className='mt-3 text-md'>
                        Input a display name
                    </div>
                    <input 
                        className='p-3 w-full mt-3 border-[#314767] border-[1px] focus:outline-none'
                        onChange={(e) => {setDisplayName(e.target.value)}}
                    />
                    <button className='mt-5 p-3 w-full bg-[#314767] text-white'>
                        Next
                    </button>
                    <div className='flex justify-center mt-4'>
                        <CircularIndeterminate />
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )
}