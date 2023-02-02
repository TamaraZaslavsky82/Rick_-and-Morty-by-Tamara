import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

import React from 'react'

function Detail() {

const {detailId} = useParams()
const [character, setCharacter] = useState()


useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.contenedor}>

    <div >
    <div className={style.text1}>
       {character ? <h2>Name : {character.name}</h2> : ' '}
    </div>
    
    
    <div className={style.text2}>
    {character ? <p>Status : {character.status}</p> : ' '}
    </div>
    
    <div className={style.text2}>
    {character ? <p>Specie : {character.species}</p> : ' '}
    </div>
    <div className={style.text2}>
    {character ? <p>Gender : {character.gender}</p> : ' '}
    </div>
    <div className={style.text2}>
    {character ? <p>Origin : {character.origin?.name}</p> : ' '}
    </div>
    

    </div>
    <div className={style.containerImg}>
    {character ? <img src={character.image} alt={character.image} className={style.img}/> : ' '}
    </div>
    <div>
      <Link to={'/home'}>
    <button className= {style.back}>BACK</button>
    </Link>
    </div>
 </div>
)
  
}

export default Detail

// Name
// Status
// Specie
// Gender
// Origin
// Image