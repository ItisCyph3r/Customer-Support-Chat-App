import React from 'react'
// import { List } from '../conponents/list'
// import { Chat } from '../conponents/chat'
import Chat from '../conponents/chat'
import { Welcome } from '../conponents/Welcome'
import axios, { AxiosResponse } from 'axios'
import List from '../conponents/list'

export const Home: React.FC<{}> = () => {

    const [chatrooms, setChatRooms] = React.useState<any[]>([]);
    const [selectedChat, setSelectedChat] = React.useState<any>();

    React.useEffect(() => {
        // axios.get(`${env.apiBaseUrl}/api/getchatrooms`)
        axios.get(`http://localhost:4000/api/getchatrooms`)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    setChatRooms(res.data);
                }
            })
    }, [chatrooms])

    const handleChatSelect = (chatData: any) => {
        setSelectedChat(chatData.messages);
    }

    console.log(selectedChat);
    return (
        <div className='flex h-screen overflow-hidden w-full'>
                <List chatroom={chatrooms} onSelect={handleChatSelect}/>
            { selectedChat === undefined && <Welcome />}

            {/* {chatrooms.length > 0 && <Chat data={selectedChat} />} */}
            { selectedChat !== undefined && <Chat data={selectedChat} />}



        </div>
    )
}