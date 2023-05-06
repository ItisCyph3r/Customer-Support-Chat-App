import React from 'react'
// import { List } from '../conponents/list'
// import { Chat } from '../conponents/chat'
import Chat from '../conponents/chat'
import { Welcome } from '../conponents/Welcome'
import axios, { AxiosResponse } from 'axios'
import List from '../conponents/list'
import { useParams } from 'react-router-dom'

export const Home: React.FC<{}> = () => {

    const [chatrooms, setChatRooms] = React.useState<any[]>([]);
    const [selectedChat, setSelectedChat] = React.useState<any>();

    const id = useParams();

    const userId = id.chatId;

    // React.useEffect(() => {
    //     fetch(`http://localhost:4000/api/users?u=${userId}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             user: userId
    //         })
    //     });   
    // }, [userId])

    React.useEffect(() => {
        // axios.get(`${env.apiBaseUrl}/api/getchatrooms`)
        axios.get(`http://localhost:4000/api/getchatrooms`)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    setChatRooms(res.data);
                }
            })
    }, [chatrooms])

    const handleChatSelect = async (chatData: any) => {
        await console.log(chatData)
        await setSelectedChat(chatData);
    }

    console.log(selectedChat)

    return (
        <div className='flex h-screen overflow-hidden w-full'>
            <List chatroom={chatrooms} onSelect={handleChatSelect}/>
            
            {/* { selectedChat === undefined && <Welcome />} */}

            { selectedChat !== undefined && <Chat data={selectedChat} chatRoomData={chatrooms} />}
        </div>
    )
}