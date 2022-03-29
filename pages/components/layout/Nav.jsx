import {ReactChild, useState} from 'react';
import {Image} from "semantic-ui-react";
const Nav = () => {
  const [admin, setAdmin] = useState(false);

  return (
    <div className="navbar" style={{position: "fixed", top: 0, width: "100%"}}>
      <ul className="pageList" style={{listStyle: "none", display: "inline-flex"}}>
        <li className="item"><a className="item" href="/index" style={{display: "inline-flex"}}><Image src="./DarkLogo.png" style={{width: "30px", height: "20px", paddingRight: "10px"}} className="logo"/> Home</a></li>
        <li className="item"><a className="item" href="/adoption" style={{marginLeft: "15px"}}>For Adoption</a></li>
        {admin && <li className="item"><a href="/admin" style={{marginLeft: "15px"}}>Admin</a></li>}
      </ul>
    </div>
  )
}

export default Nav