import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const { onSearch } = props
   const [character, setCharacter] = useState('')

   const handleChange = (event) =>{
      
      setCharacter(event.target.value)
   }

   return (
      <div className={style.bar} >
         <input className={style.search}
          type='search' 
          value={character}
          onChange={handleChange} />
      <button className={style.agregar} 
      onClick={() => onSearch(character)}>
         Agregar</button>
      </div>
   );
}
