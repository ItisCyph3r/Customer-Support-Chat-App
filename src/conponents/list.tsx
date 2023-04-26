import React from 'react'
import BadgeAvatars from './profile'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiCheckDouble } from 'react-icons/bi';
import BasicModal from './backdrop';
import axios, {AxiosResponse} from 'axios';
import env from '../env';

interface Message {
    id: string;
    text: string;
}

interface Props {
    onSelect: (messages: Message[]) => void;
    chatroom: any;
}

export default function List(props: Props) {

    const [chatRoomId, setChatRoomId] = React.useState<string>('');
    const [messages, setMessages] = React.useState<Message[]>([]);

    React.useEffect(() => {
        if (chatRoomId) {
            axios.get(`http://localhost:4000/api/messages/${chatRoomId}`)
                .then((res: AxiosResponse<{ messages: Message[] }>) => {
                    if (res.data.messages && JSON.stringify(res.data.messages) !== JSON.stringify(messages)) {
                        setMessages(res.data.messages);
                        props.onSelect(res.data.messages);
                    }
                })
        }
    }, [chatRoomId, props.onSelect, messages]);

    const handleSelect = (chatRoomId: string) => {
        setChatRoomId(chatRoomId);
    }
    
    return (
        <>
            <div className='w-[25%] bg-white md:block hidden overflow-y-scroll border-r-[2px]'>
                <div className='py-5 px-5 text-2xl font-[500]'>
                    <div>
                        Chats
                    </div>
                    <div>

                    </div>
                    
                </div>
                <div className=''>
                    {
                        props.chatroom.map((data: any) => (
                            <div className='py-3 border-b-[2px] border-t-[2px] hover:bg-[#e5e7eb]' key={data._id} onClick={() => handleSelect(data._id)}>
                                <div className='px-5 flex items-center'>
                                    <BadgeAvatars size={48} icon={data.username}/>
                                    <div className='ml-3'>
                                        <div className='text-base font-bold'>
                                            {/* Elon Musk  */}
                                            {data.username}
                                        </div>
                                        <div className='text-sm'>                                        
                                            { data.lastMessage && data.lastMessage.text.substring(0, 20) + '...' }
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
