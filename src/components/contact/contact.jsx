import React from 'react'
import "./contact.scss"
import { useState } from "react"

export default function Contact() {

    const[message,setMessage] = useState(false)
const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
}

    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="https://www.seekpng.com/png/full/87-873281_svg-download-handshake-transparent-animated-apreton-de-manos.png" alt="" />
            </div>
            <div className="right">
            <h2>Contact.</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Email" />
                <textarea placeholder = "Message"></textarea>
                <button type="submit" >Submit</button>
                {message && <span>Thanks, I'll reply ASAP :) </span>}
            </form>
            </div>
            
        </div>
    )
}
