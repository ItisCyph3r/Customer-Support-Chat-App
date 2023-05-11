import React from 'react'
import BadgeAvatars from './profile'
import { BsFillArrowRightCircleFill, BsFillMenuButtonFill } from 'react-icons/bs';
import { BiCheckDouble } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
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
    onMenuCollapse:  any;
    collapseMenu: boolean;
    handleChatroomName: any;
}

export default function List(props: Props) {

    const [chatRoomId, setChatRoomId] = React.useState<string>('');
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [collapseMenu, setCollapseMenu] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (chatRoomId) {
            axios.get(`${env.baseUrl}/api/admin/messages/${chatRoomId}`)
                .then((res: AxiosResponse<{ messages: Message[] }>) => {
                    
                    if (res.data.messages && JSON.stringify(res.data.messages) !== JSON.stringify(messages)) {
                        setMessages(res.data.messages);
                        props.onSelect(res.data.messages);
                    }
                })
        }
    }, [chatRoomId, props.onSelect, messages]);

    const handleSelect = (chatRoomId: string) => {
        // console.log(chatRoomId)
        setChatRoomId(chatRoomId);
    }

    const handleMenuCollapse = () => {
        setCollapseMenu(!collapseMenu)
        props.onMenuCollapse((prevState: any) => !prevState)
    }

    
    // console.log(messages)
    // console.log(collapseMenu)
    return (
        <>
            <div className={`${props.collapseMenu === false ? 'w-[25%]' : 'w-[0%]'} bg-white md:block ml-[-0%] overflow-y-scroll overflow-x-hidden border-r-[2px]`}>
                <div className='py-5 px-5 text-2xl font-[500] flex justify-between items-center'>
                    <div>
                        Chats
                    </div>
                    <div onClick={handleMenuCollapse}>
                        <AiOutlineMenu />
                    </div>
                    
                </div>
                <div className=''>
                    {
                        props.chatroom.map((data: any) => (
                            <div className='py-3 border-b-[2px] border-t-[2px] hover:bg-[#e5e7eb]' key={data._id} onClick={() => handleSelect(data._id)}>
                                <div className='px-5 flex items-center'>
                                    <BadgeAvatars size={48} icon={data.username}/>
                                    <div className='ml-3 '>
                                        <div className='text-sm font-bold' 
                                            
                                        >
                                            {/* Elon Musk  */}
                                            {data.username}
                                        </div>
                                        <div className='text-xs'>                                        
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
