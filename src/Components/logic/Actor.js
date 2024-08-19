import React from "react";
import { Actors } from "../style/ChoosenMovieStyle";

const Actor = ({name, character, photo}) =>{
    return(
    <Actors>
        <img src={"https://image.tmdb.org/t/p/w185/"+photo} alt={name}/>
        <p>{name}</p>
        <p>jako {character}</p>
    </Actors>
    )
}

export default Actor;