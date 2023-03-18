import { ADD_FAVORITES, DELETE_FAVORITES, FILTER,ORDER } from "./type";

export function orderCards(id){
    return{
        type: ORDER,
        payload: id
    }
}

export function filterCards(gender){
    return{
        type: FILTER,
        payload: gender
    }
}

export function addFavorites(character){
   return async function (dispatch) {
    try {
        await fetch('http://localhost:3001/rickandmorty/fav', {
            method: 'POST',
            body:JSON.stringify(character),
            headers:{
                'Content-Type': 'application/json, charset=UTF-8'
            }

        })
        .then((response) => response.json())
        .them((data)=> dispatch({
            type: ADD_FAVORITES,
            payload: data   
        }))
    } catch (error) {
        console.log(error)
        
    }
}
}
export function deleteFavorites(id){
   return async function(dispatch){
    try {
        await fetch(`http://localhost:3001/rickandmorty/fav/${id}`,{
            method: 'DELETE',
              
        })
        .then((response)=> response.json())
        .then((data)=>{
           if(data.success)dispatch({
            type: DELETE_FAVORITES,
            payload: id

           }) 
        })
    } catch (error) {
        console.log(error)
    }
   
}
}