import react,{useState} from "react"
import {Link} from "react-router-dom"
import {Avatar} from "antd"
import "@quasar/extras/ionicons-v4/ionicons-v4.css"

const navLinks = [
    {
        title:"Home",
        path:"/home"
    },
    {
        title:"market",
        path:"/market"
    },
    {
        title:"Contract us",
        path:"/contract-us"
    },
    {
        title:"Login",
        path:"/login"
    }
]

export default function Navigator({user}){
    const [menuActive,setMenuActive] = useState(true)
    return (
        <nav className="site-navigation">
            <span className="menu-title">碳交易</span>
            <div className={`menu-content-container ${menuActive&& "active"}`}>
                <ul>
                    {
                        navLinks.map((link,index)=>(
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))
                    }
                </ul>
                <span className="menu-avator-container">
                    <Avatar 
                    className="ant-avator"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className="menu-avator-name">{user.firstName} {user.lastName}</span>
                </span>
                
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={()=> setMenuActive(!menuActive)}>
            </i>
        </nav>
    )
}