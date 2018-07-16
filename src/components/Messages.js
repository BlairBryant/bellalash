import React from 'react'
import './Messages.css'
import backArrow from '../assets/backArrow.svg'
import x from '../assets/x.svg'
import plus from '../assets/plus.svg'
import hash from '../assets/hash.svg'
import send from '../assets/send.svg'

export default function Messages(props) {
    return (
        <div className={props.toggle ? 'messages messagesSlide column' : 'messages column'}>
            <div>
                <div className='messagesNav row'>
                    <img src={backArrow} alt="" onClick={props.toggleMessages}/>
                    <span>New Conversation</span>
                    <img src={x} alt="" onClick={props.toggleMessages}/>
                </div>
                <div className='messagesNav2 row'>
                    <img src={plus} alt=""/>
                    <img src={hash} alt=""/>
                </div>
            </div>
            <div className='messagesChatbox column'>
                <ul>
                    <li>Conversation</li>
                    <li>Files</li>
                    <li>Logs</li>
                </ul>
                <div>
                    <input />
                    <img src={send} alt="" id='sendSVG'/>
                </div>
            </div>
        </div>
    )
}