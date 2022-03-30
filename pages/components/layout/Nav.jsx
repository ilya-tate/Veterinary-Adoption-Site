import {ReactChild, useState} from 'react';
import {Image} from "semantic-ui-react";
import { logoutUser } from '../../util/auth';
const Nav = ({user: email}) => {
  const [admin, setAdmin] = useState(false);
  

  return (
    <div className="navbar">
      <ul className="pageList" style={{listStyle: "none", display: "inline-flex"}}>
        <li className="item"><a className="item" href="/index" style={{display: "inline-flex"}}><Image src="./DarkLogo.png" style={{width: "30px", height: "20px", paddingRight: "10px"}} className="logo"/> Home</a></li>
        <li className="item"><a className="item" href="/adoption" style={{marginLeft: "15px"}}>For Adoption</a></li>
        <li className="item"><a className="item" onClick={() => logoutUser(email)} style={{marginLeft: "15px"}}>Log Out</a></li>
        {admin && <li className="item"><a href="/admin" style={{marginLeft: "15px"}}>Admin</a></li>}
      </ul>
    </div>
  )
}

export default Nav