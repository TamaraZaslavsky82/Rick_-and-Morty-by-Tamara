import style from './Favorite.module.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { orderCards, filterCards} from '../Redux/action'

export function Favorites  ()  {
  const { myFavorites} = useSelector ( state => state )
  const dispatch = useDispatch()  

  const handleOrder = (event) => {
     dispatch(orderCards(event.target.value))
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
 }

  return (
    <div className={style.container} >
        <div className={style.container1}>
                            <select onChange={handleOrder}className={style.selector}>
                                <option value='Ascendente'>Ascendente</option>
                                <option value='Descendente'>Descendente</option>
                            </select>
                            <select className={style.selector} onChange={handleFilter}>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                                <option value='Unknown'>Unknown</option>
                                <option value='Genderless'>Genderless</option>
                            </select>
                        </div>
        {
            myFavorites.map((character) => {
                return(
                    <div >
                        
                        
                        <img className={style.foto} src={character.image} alt="" />
                         <div >
                            <h2 className={style.name}>{character.name}</h2>
                        <h2  className={style.especie}>{character.species}</h2>
                        <h2 className={style.genero} >{character.gender}</h2>
                       
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
    
  
}

