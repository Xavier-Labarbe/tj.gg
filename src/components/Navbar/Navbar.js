import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import '../../styles/Navbar.css'
import {
    Link
} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false, searchName: ""}
    }

    handleSumonnerName = (value) => {
        console.log(value)
        this.setState({searchName : value})
    }

    handleClick= () => {
        this.setState({clicked: !this.state.clicked})
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            this.button.click()
        }
    }


    render(){
        return(
            <nav className={"NavbarItems"}>
                <h1 className={"navbar-logo"}>TJ.GG</h1>
                <div className={"menu-icon"} onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <input type="text" onChange={e => this.handleSumonnerName(e.target.value)} onKeyDown={this._handleKeyDown}/>
                <Link to={"/user/" + this.state.searchName} onClick={this.forceUpdate}>
                    <button ref={el => (this.button = el)}> Search </button>
                </Link>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cname} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export {Navbar}