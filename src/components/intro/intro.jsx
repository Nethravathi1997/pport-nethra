import { init } from "ityped"
import "./intro.scss"
import { useEffect, useRef } from "react"



export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
       init(textRef.current, {
           showCursor:false,
           backDelay:100,
           strings:["Namaste","నమస్కారం","नमस्कार","ನಮಸ್ಕಾರ"]
       })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1><span ref = {textRef}></span></h1>
                    <br />
                    <h2>I'm</h2>
                    <h1>Nethravathi T</h1>
                    <h3>Full Stack Developer</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
