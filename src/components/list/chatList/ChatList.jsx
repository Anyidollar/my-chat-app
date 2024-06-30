import React, { useState } from 'react';
import "./chatList.css"
import AddUser from '../../chat/AddUser';

const ChatList = () => {
  const [addMode, setAddMode]= useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src='/search.png' alt=''/>
          <input type="text" placeholder='Search'/>
        </div>
        <img src={addMode ? "./minus.png":"./plus.png"} alt='' className='add'
        onClick={()=>setAddMode(prev=>!prev)}/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ifeanyi</span>
          <h2>Hello</h2>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ifeanyi</span>
          <h2>Hello</h2>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Ifeanyi</span>
          <h2>Hello</h2>
        </div>
      </div>
      { addMode && <AddUser />}
    </div>
  )
}

export default ChatList