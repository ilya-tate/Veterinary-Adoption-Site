import {ReactChild, useState} from 'react';
import {Image} from "semantic-ui-react";
const Nav = () => {
  const [admin, setAdmin] = useState(false);

  return (
    <div className="navbar">
      <ul className="pageList" style={{listStyle: "none", display: "inline-flex"}}>
        <li className="item"><a href="/index"><Image src="./DarkLogo.png" style={{width: "40px", height: "30px"}} className="logo"/></a></li>
        <li className="item"><a href="/login" style={{marginLeft: "15px"}}>Login</a><a style={{color: "white"}}>/</a><a href="/signup">Sign Up</a></li>
        <li className="item"><a href="/adoption" style={{marginLeft: "15px"}}>For Adoption</a></li>
        <li className="item"><a href="/events" style={{marginLeft: "15px"}}>Events</a></li>
        {admin && <li className="item"><a href="/admin" style={{marginLeft: "15px"}}>Admin</a></li>}
      </ul>
    </div>
  )
}

export default Nav