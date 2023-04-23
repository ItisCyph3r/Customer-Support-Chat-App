import React from 'react'
import BadgeAvatars from './profile'
import { BiCheckDouble } from 'react-icons/bi'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import CircularIndeterminate from './progress'
import { formatDate, formatTime } from './formatDate'

type Props = {
    data: any
}
export default function Chat({ data }: Props) {
    const [lastDate, setLastDate] = React.useState('')

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
                
                   


                    {
            data &&
            data.map((messages: any) => {
              const currentDate = formatDate(messages.createdAt)
              let dateToDisplay = null
              if (currentDate !== lastDate) {
                dateToDisplay = (
                    currentDate
                )
                setLastDate(currentDate)
              }

              return (
                <div key={messages._id}>
                  {/* {dateToDisplay} */}
                  <div className='flex justify-center'>
                    <div className='bg-[#e5e7eb] rounded-2xl px-3 py-1 mt-3 text-xs'>
                      {dateToDisplay}
                    </div>
                  </div>
                  {
                    messages.user.isVerified
                  }
                  <div>
                    <div className={`flex mt-3 ${messages.user.isVerified === false ? 'items-end justify-end mr-3' : 'items-center'}`}>
                      {/* <BadgeAvatars size={40}/> */}
                      <div className='ml-3 p-2 bg-blue-300 rounded-b-2xl rounded-tr-2xl max-w-[80%] text-sm'>
                        {messages.text}
                      </div>

                    </div>
                    <div className={`text-xs px-3 mt-1 font-medium text-gray-500 flex items-center ${messages.user.isVerified === false ? 'items-end justify-end mr-3' : null}`}>
                      {formatTime(messages.createdAt)}
                      <BiCheckDouble size={20} className='ml-1' />
                    </div>
                  </div>
                </div>
              )
            })
          }

                    
                    
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