import React, { useState, useRef, useEffect, useCallback } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import upload from "../../lib/upload";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState({ messages: [] });
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [img, setImg] = useState({ file: null, url: "" });

  const { chatId, user } = useChatStore();
  const { currentUser } = useUserStore();
  const endRef = useRef(null);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });
    return () => unSub();
  }, [chatId]);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const debouncedSend = useCallback(
    debounce(async (text, img, currentUser, chatId, user, sending) => {
      if (text === "" || sending) return;
      setSending(true);

      let imgUrl = null;
      if (img.file) {
        imgUrl = await upload(img.file);
      }

      const newMessage = {
        id: `${Date.now()}-${currentUser.id}`,
        senderId: currentUser.id,
        text,
        createdAt: Date.now(),
        ...(imgUrl && { img: imgUrl }),
      };

      try {
        await updateDoc(doc(db, "chats", chatId), {
          messages: arrayUnion(newMessage),
        });

        const userIDs = [currentUser.id, user.id];
        userIDs.forEach(async (id) => {
          const userChatRef = doc(db, "userchats", id);
          const userChatsSnapshot = await getDoc(userChatRef);

          if (userChatsSnapshot.exists()) {
            const userChatsData = userChatsSnapshot.data();
            const chatIndex = userChatsData.chats.findIndex(
              (c) => c.chatId === chatId
            );
            if (chatIndex !== -1) {
              userChatsData.chats[chatIndex].lastMessage = text;
              userChatsData.chats[chatIndex].isSeen =
                id === currentUser.id ? true : false;
              userChatsData.chats[chatIndex].updatedAt = Date.now();

              await updateDoc(userChatRef, {
                chats: userChatsData.chats,
              });
            }
          }
        });

        setChat((prevChat) => {
          const messageExists = prevChat.messages.some(
            (message) => message.id === newMessage.id
          );
          if (!messageExists) {
            return {
              ...prevChat,
              messages: [...prevChat.messages, newMessage],
            };
          }
          return prevChat;
        });

        setText("");
        setImg({ file: null, url: "" });
      } catch (error) {
        console.log(error);
      } finally {
        setSending(false);
      }
    }, 500),
    []
  );

  const handleSend = useCallback(() => {
    debouncedSend(text, img, currentUser, chatId, user, sending);
  }, [text, img, currentUser, chatId, user, sending]);

  return (
    <div className="chat">
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
        {chat?.messages?.map((message) => (
          <div
            className={
              message.senderId === currentUser.id ? "message own" : "message"
            }
            key={message?.id || message?.createdAt}
          >
            <div className="text">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
            </div>
          </div>
        ))}

        {img.url && (
          <div className="message own">
            <div className="text">
              {img.url && <img src={img.url} alt="" />}
            </div>
          </div>
        )}

        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleImg}
          />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton" onClick={handleSend} disabled={sending}>
          send
        </button>
      </div>
    </div>
  );
};

export default Chat;
