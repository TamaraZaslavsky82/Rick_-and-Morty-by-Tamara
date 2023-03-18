import Card from './Card'
import style from './Cards.module.css'
import React from 'react';

export default function Cards(props) {
   const { characters, onClose } = props;
   return( 
   <div className={style.container}>
{
  characters.length === 0 ?
  (<p style={{color: '#2C3E50',
  marginTop: '160px',
  marginLeft: '450px',
  fontSize: '24px',
  backgroundColor: '#66CC00',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '2px 2px 10px #ccc'}}> 
   Descubre tu personaje !!!
   
  </p>
  )
  : 
  ( characters.map(({name, species, gender, image,id}, index) =>{
   return <Card 
   key={index}
   name={name}
   species={species}
   gender={gender}
   image={image}
   onClose={() => onClose(id)}
   id={id}
   />
}))
}
 
   </div>
   );
}
