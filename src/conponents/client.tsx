import React from "react";
import BadgeAvatars from "./profile";
import { BiCheckDouble } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import CircularIndeterminate from "./progress";
import { formatDate, formatTime } from "./formatDate";
import axios, { AxiosResponse } from "axios";
import env from "../env";
import { useParams } from "react-router-dom";

type Props = {
  data: any;
  chatRoomData: any;
};

interface Message {
    id: string;
    text: string;
}

export default function Client({ data, chatRoomData }: Props) {

    const id = useParams();

    const userId = id.chatId;

    const [messages, setMessages] = React.useState<Message[]>([]);
    const [text, setText] = React.useState('');
    const containerRef = React.useRef<HTMLDivElement>(null);

    
    React.useEffect(() => {
    if (userId) {
        
        // axios.get(`http://localhost:4000/api/client/messages/${userId}`)
        axios.get(`http://localhost:4000/api/client/messages/${userId}`)
            .then((res: AxiosResponse<{ messages: Message[] }>) => {
                if (res.data.messages && JSON.stringify(res.data.messages) !== JSON.stringify(messages)) {
                    setMessages(res.data.messages);
                    // props.onSelect(res.data.messages);
                }
            })
    }
}, [messages]);

React.useEffect(() => {
    // Scroll to the bottom of the container when the component mounts or when the messages change
    const container: any = containerRef.current;
    container.scrollTop = container.scrollHeight;
}, [messages]);


    const groupedMessages = messages && messages.length > 0 ? messages.reduce((acc: any, message: any) => {
        const date = formatDate(message.createdAt);
        acc[date] = acc[date] || [];
        acc[date].push(message);
        return acc;
    }, {}) : {};

    console.log(messages);
    async function postData() {
        await messages
        await fetch(`http://localhost:4000/api/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            user: messages[0].user._id,
            admin: messages[0].admin,
            chatRoom: messages[0].chatRoom,
            text: text
            })
        });
        
        await setText('');
    }

    

    const messageGroups = Object.entries(groupedMessages);    

    return (

    <>
    
        <div className="sm:w-[100%] w-full  overflow-y-scroll relative" ref={containerRef}>
            <div className="py-3 px-5 border-b-[2px] flex items-center fixed bg-white w-full">
            <BadgeAvatars size={48} icon="Daiz Xchange Trading Agent"/>
            <div className="ml-3">
                <div className="text-xl font-[400]">Daiz Xchange Trading Agent</div>
                <div className="text-xs text-[#a7a9ac]">Online</div>
            </div>
            </div>
    
            <div className="mt-[70px]">
            <div>
                {messageGroups.map(([date, messages]: any, i: number) => (
                <div key={date}>
                    <div className="flex justify-center">
                    <div className="bg-[#e5e7eb] rounded-2xl px-3 py-1 mt-3 text-xs">
                        {date}
                    </div>
                    </div>
                    {
                    messages.map((message: any, j: number) => (
                        <div key={message._id}>
                        {  message.user && <>

                        <div
                            className={`flex mt-3 ${
                            message.user.isVerified === false
                                ? "items-end justify-end mr-3"
                                : "items-center"
                            }`}
                        >
                            {/* <BadgeAvatars size={40}/> */}
                            <div className="ml-3 p-2 bg-blue-300 rounded-b-2xl rounded-tr-2xl max-w-[80%] text-sm">
                            {message.text}
                            </div>
                        </div>
                        <div
                            className={`text-xs px-3 mt-0 font-medium text-gray-500 flex items-center ${
                            message.user.isVerified === false
                                ? "items-end justify-end mr-3"
                                : null
                            } ${
                            i === messageGroups.length - 1 && j === messages.length - 1
                                ? "mb-[70px]"
                                : ""
                            }`}
                        >
                            {formatTime(message.createdAt)}
                            <BiCheckDouble size={20} className="ml-1" />
                        </div>
                        </>}
                        </div>
                    ))
                    }
                </div>
                ))}
            </div>
    
            <div className="w-full">
                <div className="fixed bg-[#e5e7eb] w-full bottom-0 p-2 flex">
                <input 
                    className="outline-none w-full  max-w-[100%] py-2 px-2 rounded-xl" 
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    
                />
                <button className="ml-3 rounded-xl" onClick={postData}>
                    <BsFillArrowRightCircleFill size={30} />
                </button>
                </div>
            </div>
            </div>
        </div>
        </>
    );

}