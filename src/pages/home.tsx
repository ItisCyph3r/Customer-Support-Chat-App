import React from 'react'
import { List } from '../conponents/list'
import { Chat } from '../conponents/chat'
import { Welcome } from '../conponents/Welcome'

export const Home: React.FC<{}> = () => {
    return (
        <div className='flex h-screen overflow-hidden w-full'>
            <List />
            {/* <Welcome /> */}
            <Chat />
        </div>
    )
}