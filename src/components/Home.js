import React, {useState} from "react";
import '../App.css'

import {
    Link
} from "react-router-dom";

export default function Home() {

    const [searchText, setSearchText] = useState("")

    return (<div className={"App"}>
            <div className={"container"}>
                <h5>TJ.GG</h5>
                <input type="text" onChange={e => setSearchText(e.target.value)}/>
                <Link to={"/user/" + searchText}>
                    <button> Search</button>
                </Link>

            </div>
        </div>);
}