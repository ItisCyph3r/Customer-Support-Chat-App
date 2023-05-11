import React from 'react'
// import { List } from '../conponents/list'
// import { Chat } from '../conponents/chat'
import Chat from '../conponents/chat'
import { Welcome } from '../conponents/Welcome'
import axios, { AxiosResponse } from 'axios'
import List from '../conponents/list'
import { useParams } from 'react-router-dom'
import env from '../env'

export const Home: React.FC<{}> = () => {

    const [chatrooms, setChatRooms] = React.useState<any[]>([]);
    const [selectedChat, setSelectedChat] = React.useState<any>();
    const [collapseMenu, setCollapseMenu] = React.useState<boolean>(false);
    const [chatroomName, setChatroomName] = React.useState<string>('')
    const id = useParams();

    const userId = id.chatId;

    React.useEffect(() => {
        // axios.get(`${env.apiBaseUrl}/api/getchatrooms`)
        axios.get(`${env.baseUrl}/api/admin/getchatrooms`)
            .then((res: AxiosResponse) => {
                if (res.data) {
                    setChatRooms(res.data);
                }
            })
    })

    const handleChatSelect = async (chatData: any) => {
        await console.log(chatData)
        await setSelectedChat(chatData);
    }

    const handleMenuCollapse = async (isCollapsed: boolean) => {
        setCollapseMenu(isCollapsed)
    } 

    const handleChatroomName= async (name: string) => {
        setChatroomName(name)
    } 
    // console.log(chatroomName)

    return (
        <div className='flex h-screen overflow-hidden w-full'>
            <List 
                chatroom={chatrooms} 
                onSelect={handleChatSelect} 
                onMenuCollapse={handleMenuCollapse} 
                collapseMenu={collapseMenu}
                handleChatroomName={handleChatroomName}
            />
            
            {/* { selectedChat === undefined && <Welcome />} */}

            { selectedChat !== undefined && <Chat data={selectedChat} chatRoomData={chatrooms} onMenuCollapse={handleMenuCollapse} collapseMenu={collapseMenu}/>}
        </div>
    )
}