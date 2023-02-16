import { ADD_FAVORITES,DELETE_FAVORITES, FILTER, ORDER } from "./type";

const initialState = {
    myFavorites: [],
    allCharacters: []
    
    

    }

export default  function rootReducer(state= initialState, {type, payload}){
    switch (type) {
        case ADD_FAVORITES:
            return{
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters:[...state.allCharacters, payload]
                
            }
            
        case DELETE_FAVORITES:
           return {
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== payload)

            }
            case FILTER:
                const allCharsFilter = state.allCharacters.filter( character => character.gender 
                    === payload)
                    return{
                        ...state,
                        myFavorites:allCharsFilter
                    } 
            case ORDER:
            return{
                ...state,
                myFavorites:
                payload === 'Ascendente' ? 
                state.allCharacters.sort((a,b)=> a.id - b.id) :
                state.allCharacters.sort((a,b)=> b.id - a.id)
            }        
           
            default:
                return{...state} 
        
            }       

                }
            

    
            
         
         
              

    