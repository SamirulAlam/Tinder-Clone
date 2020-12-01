import React from 'react';
import Chat from './Chat';
import "./Chats.css";

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Elon Musk"
                message="YO"
                timestamp="20 seconds ago"
                profilePic="https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
            />
            <Chat 
                name="Bill Gates"
                message="Whats Up"
                timestamp="54 minutes ago"
                profilePic="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
            />
            <Chat 
                name="Marks"
                message="Hello"
                timestamp="3 days ago"
                profilePic="https://i.insider.com/5d84ce522e22af4c215743c6?width=1136&format=jpeg"
            />
            <Chat 
                name="Steve Jobs"
                message="Hey"
                timestamp="1 week ago"
                profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
            />
            
        </div>
    )
}

export default Chats
