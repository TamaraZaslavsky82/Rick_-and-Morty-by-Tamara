import Card from './Card'
import style from './Cards.module.css'
import React from 'react';

export default function Cards(props) {
   const { characters, onClose } = props;
   return( 
   <div className={style.container}>
{
   characters.map(({name, species, gender, image,id}, index) =>{
      return <Card 
      key={index}
      name={name}
      species={species}
      gender={gender}
      image={image}
      onClose={() => onClose(id)}
      id={id}
      />
   })
}
   </div>
   );
}
