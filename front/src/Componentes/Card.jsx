import style from './Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, deleteFavorites } from '../Redux/action';





export default function Card({name, gender, onClose,species, image,id}) {

   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const myFavorites = useSelector((state)=>state.myFavorites)

   function handleFavorites  () {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavorites(id))
      } else {
         setIsFav(true);
         dispatch(addFavorites({name, gender, onClose,species, image,id}))
   }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
    

    return (
      
       <div className={style.container}>
           {
   isFav ? (
      <div className={style.favorite1}>
      <button className={style.botonf} onClick={() =>handleFavorites(id)}>❤️</button>
      </div>
   ) : (
      <div className={style.favorite1}>
      <button className={style.botonf} onClick={()=>handleFavorites(id)}>🤍</button>
      </div>
   )
        }
       
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
         



 
 

 