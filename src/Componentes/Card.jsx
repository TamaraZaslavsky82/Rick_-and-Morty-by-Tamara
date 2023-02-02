import style from './Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({name, species, gender, image, onClose, id}) {
    return (
       <div className={style.container}>
          <button className={style.boton} onClick={onClose}>X</button>
          <Link to={`/detail/${id}`} >
          <h2 className={style.name}>{name}</h2>
          </Link>
          <img className={style.foto} src={image} alt="" />
          <div className={style.otherH2}>
          <h2 className={style.especie}>{species}</h2>
          <h2 className={style.genero}>{gender}</h2>
          </div>
       </div>
    );
 }
 