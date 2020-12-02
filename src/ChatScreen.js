import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatScreen.css"

function ChatScreen() {

    const [input,setInput]=useState("");
    const [messages,setMessages]=useState([
        {
            name:"Bill",
            image:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
            message:"yo",
            
        },
        {
            message:"wow"
        }
    ]);

    const handleChange=e=>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with bill in 1 december</p>
            {messages.map(message=>(
                message.name ? (
                    <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__avatar"
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
                ) :(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            ))}
            <div >
                <form className="chatScreen__input">
                    <input 
                        value={input} 
                        onChange={e=>setInput(e.target.value)} 
                        className="chatScreen__inputField" 
                        type="text" 
                        placeholder="type a message" 
                    />
                    <button onClick={handleChange} className="chatScreen__inputButton">SEND</button>
                </form>
            </div>

        </div>
    )
}

export default ChatScreen
