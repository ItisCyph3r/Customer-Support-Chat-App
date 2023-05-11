import React from "react";
import BadgeAvatars from "./profile";
import { BiCheckDouble } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { AiOutlineMenu } from 'react-icons/ai';
import CircularIndeterminate from "./progress";
import { formatDate, formatTime } from "./formatDate";
import axios from "axios";
import env from "../env";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

type Props = {
  data: any;
  chatRoomData: any;
  collapseMenu: boolean;
  onMenuCollapse: any
};

export default function Chat({ data, chatRoomData, onMenuCollapse, collapseMenu }: Props) {

  const id = useParams();

  const userId = id.chatId;

  // console.log(userId);
  // const isMediumScreen = useMediaQuery("(min-width: 768px)");


  // console.log(userId)
  const [collaMenu, setCollaMenu] = React.useState<boolean>(true);
  const [text, setText] = React.useState('');
  const containerRef = React.useRef<HTMLDivElement>(null);


  const [isMediumScreen, setIsMediumScreen] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleChange = (event: any) => {
      setIsMediumScreen(event.matches);
    };

    const handleResize = () => {
      handleChange(mediaQuery);
    };

    mediaQuery.addListener(handleChange);

    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeListener(handleChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

// console.log(env.);
  const groupedMessages = data && data.length > 0 ? data.reduce((acc: any, message: any) => {
    const date = formatDate(message.createdAt);
    acc[date] = acc[date] || [];
    acc[date].push(message);
    return acc;
  }, {}) : {};

  async function postData() {
    await fetch(`${env.baseUrl}/api/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: data[0].admin,
          admin: data[0]?.admin,
          chatRoom: data[0].chatRoom._id,
          text: text
        })
    });
    
    await setText('');
  }
  // console.log(data)
  React.useEffect(() => {
    // Scroll to the bottom of the container when the component mounts or when the messages change
    const container: any = containerRef.current;
    container.scrollTop = container.scrollHeight;
  }, [data]);

  const messageGroups = Object.entries(groupedMessages);
// console.log(chatRoomData);
  return (
    <>
    {/* {
      chatRoomData.map((element) => (

      ))
    } */}
      <div className="w-full overflow-y-scroll relative" ref={containerRef}>
        <div className="py-3 px-5 border-b-[2px] flex items-center fixed bg-white w-full">
          <div className="flex justify-between items-center">
          {
            collapseMenu === true || isMediumScreen ?
            <div onClick={() => {
              // setCollaMenu(!collaMenu)
              onMenuCollapse((prevState: any) => !prevState)
            }}
            className="mr-4"
          >
              <AiOutlineMenu size={25}/>
            </div>
            : null
          }
          <BadgeAvatars size={48} icon="Daiz Xchange Trading Agent"/>
          </div>
          
          <div className="ml-3">
            <div className="text-lg font-[400]"> { userId }</div>
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
                            ? "items-center"
                            : "items-end justify-end mr-3" 
                        }`}
                      >
                        {/* <BadgeAvatars size={40}/> */}
                        <div className="ml-3 p-2 bg-blue-300 rounded-b-2xl rounded-tr-2xl max-w-[80%] text-sm">
                          {message.text}
                        </div>
                      </div>
                      <div
                        className={`text-[0.65rem] px-3 mt-0 font-medium text-gray-500 flex items-center ${
                          message.user.isVerified === false
                            ? null
                            : "items-end justify-end mr-3"
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
                className={`outline-none w-full ${collapseMenu ? 'md:w-[100%]' : 'md:w-[76%]' } max-w-[100%] py-2 px-2 rounded-xl`}
                onChange={(e) => setText(e.target.value)}
                value={text}
                
              />
              <button className="ml-2 rounded-xl" onClick={postData}>
              <BsFillArrowRightSquareFill size={40} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  
}
