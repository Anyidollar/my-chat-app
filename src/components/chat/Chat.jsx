import React, {  useState } from 'react';
import "./chat.css";
import EmojiPicker from 'emoji-picker-react';


const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")

  const handleEmoji = e =>{
    setText((prev)=>prev + e.emoji)
    setOpen(false)
  }
  console.log(text)
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>Ifeanyi</span>
            <p>Online by Ifeco limited...</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere minus aliquid animi, quibusdam eaque laborum voluptatibus dolorum ex ipsam consequatur id non saepe, praesentium magnam expedita, tempore natus nulla?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere minus aliquid animi, quibusdam eaque laborum voluptatibus dolorum ex ipsam consequatur id non saepe, praesentium magnam expedita, tempore natus nulla?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere minus aliquid animi, quibusdam eaque laborum voluptatibus dolorum ex ipsam consequatur id non saepe, praesentium magnam expedita, tempore natus nulla?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="text">
          <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fHx8MTY0MzYwNzA2MQ&ixlib=rb-1.2.1&q=80&w=1080" alt="" />

            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere minus aliquid animi, quibusdam eaque laborum voluptatibus dolorum ex ipsam consequatur id non saepe, praesentium magnam expedita, tempore natus nulla?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere minus aliquid animi, quibusdam eaque laborum voluptatibus dolorum ex ipsam consequatur id non saepe, praesentium magnam expedita, tempore natus nulla?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt=""/>
          <img src="./camera.png" alt=""/>
          <img src="./mic.png" alt=""/>
        </div>
        <input type="text" placeholder='Type a message...
        'value={text}
        onChange={e=>setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>setOpen(prev=>!prev)}/>
          <div className="picker">
          <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
        <button className='sendButton'>send</button>
      </div>
    </div>
  )
}

export default Chat