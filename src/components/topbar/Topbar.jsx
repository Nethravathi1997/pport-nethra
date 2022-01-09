import "./topbar.scss";
// import {Person , Mail} from "@mui/material"

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
           <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Nvt.</a>
                <div className="itemContainer">
                    {/* <Person className="icon" /> */}
                    <span> Mobile : +91 966 350 5660</span>
                </div>
                <div className="itemContainer">
                    {/* <Mail className="icon"/> */}
                    <span>Email : tnethravathi7@gmail.com</span>
                </div>
            </div>
            <div className="right">
                <div className="hamburger" onClick = {() => setMenuOpen(!menuOpen)}>
                    <span className = "line1"></span>
                    <span className = "line2"></span>
                    <span className = "line3"></span>
                </div>
            </div>
           </div>
        </div>
    )
}
