import React from 'react'
import BadgeAvatars from './profile'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiCheckDouble } from 'react-icons/bi';
import BasicModal from './backdrop';
import axios, {AxiosResponse} from 'axios';
import env from '../env';

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const List: React.FC<{}> = () => {

    const [chatrooms, setChatRooms] = React.useState<any[]>([]);

    React.useEffect(() => {
        // axios.get(`${env.apiBaseUrl}/api/getchatrooms`)
        axios.get(`http://localhost:4000/api/getchatrooms`)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    setChatRooms(res.data);
                }
            })
    }, [chatrooms])
    
    return (
        <>
        {/* <BasicModal /> */}
            <div className='w-[25%] bg-white md:block hidden overflow-y-scroll'>
                <div className='py-5 px-5 text-2xl font-[500] bg-white '>
                    Chats
                </div>
                <div className=''>
                    {
                        chatrooms.map((data, index) => (
                            <div className='py-3 border-b-[2px] hover:bg-[#e5e7eb]' key={data._id}>
                                <div className='px-5 flex items-center'>
                                    <BadgeAvatars size={48} icon={data.username}/>
                                    <div className='ml-3'>
                                        <div className='text-base font-bold'>
                                            {/* Elon Musk  */}
                                            {data.username}
                                        </div>
                                        <div className='text-sm'>
                                            Heyy
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }                
                </div>
            </div>
        </>
    )
}