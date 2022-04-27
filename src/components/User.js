import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react"
import axios from "axios";
import App from '../App.css'
import {Navbar} from "./Navbar/Navbar";

export default function User() {

    const base_url = "https://euw1.api.riotgames.com"
    const riotKey = "RGAPI-8b68fb5e-c785-46fc-958e-cf8fb5c62347"
    const {summonerName} = useParams()
    const summonerCall = base_url + "/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + riotKey
    //const history = base_url+"/lol/match/v5/matches/by-puuid/"+summoner.puuid+"/ids?start=0&count=20&api_key="+riotKey


    const [isLoading, setLoading] = useState(true);
    const [summoner, setSummoner] = useState();
    //const [history, setHistory] = useState();

    useEffect(() => {
        console.log(summonerName)
        axios.get(summonerCall).then(response => {
            setSummoner(response.data)
            setLoading(false)
        })
    }, [])

    if (isLoading) {
        return <div className={App}>Loading ...</div>
    }

    return (
        <div className={"App"}>
            <Navbar/>
            <h2>{summoner.name}</h2>
            <img
                src={"https://ddragon.leagueoflegends.com/cdn/12.7.1/img/profileicon/" + summoner.profileIconId + ".png"}
                alt=""/>
            <h2>{summoner.summonerLevel}</h2>
        </div>
    )

}
