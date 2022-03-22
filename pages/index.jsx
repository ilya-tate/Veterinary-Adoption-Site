import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Divider } from "semantic-ui-react";

export default function Home() {
  return (
    <div className="homeDiv">
      <div className="main" style={{height: "fit-content", width: "100vw"}}></div>
      <div style={{position: "absolute", bottom: "0"}}>
      <Divider style={{backgroundColor: "gray", color: "gray", height: "5px"}}/>
      <footer className="footer" style={{backgroundColor: "black", color: "white", width: "100vw", height: "23vh"}}></footer>
      </div>
    </div>
  )
}
