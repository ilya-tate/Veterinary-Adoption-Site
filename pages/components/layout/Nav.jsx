import {ReactChild, useState} from 'react';

const Nav = () => {
  const [admin, setAdmin] = useState(false)
  return (
    <div className="navbar" style={{backgroundColor: "blue"}}>
      <ul className="pageList" style={{listStyle: "none", display: "inline-flex"}}>
        <li className="item"><a href="/index" >Home</a></li>
        <li className="item"><a href="/login" style={{marginLeft: "15px"}}>Login</a>/<a href="/signup">Sign Up</a></li>
        <li className="item"><a href="/adoption" style={{marginLeft: "15px"}}>For Adoption</a></li>
        <li className="item"><a href="/events" style={{marginLeft: "15px"}}>Events</a></li>
        {admin && <li className="item"><a href="/admin" style={{marginLeft: "15px"}}>Admin</a></li>}
        <img style={{width: "40px", height: "40px"}} src="./logo.png" alt="" srcset="" />
      </ul>
    </div>
  )
}

export default Nav