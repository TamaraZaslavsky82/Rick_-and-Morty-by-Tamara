import './App.css'

import Cards from './Componentes/Cards.jsx'
import { useState, useEffect } from 'react'
import characters from './data.js'
import Nav from './Componentes/Nav.jsx'
import About from './Componentes/About'
import { Route, Routes, useLocation, useNavigate,  } from 'react-router-dom'
import Detail from './Componentes/Detail'
import Form from './Componentes/Form'
import Errores from './Componentes/Errores'
import { Favorites } from './Componentes/Favorites'







function App () {
  const location = useLocation()
  const [characters, setCharacters]=useState([])
  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  
  const username = 'tamara@gmail.com'
  const password = 'password123'

  
  
  
  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

  function login(userData){
if(userData.username === username && userData.password === password){
  setAccess(true)
  navigate('/home')
}
  }



  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
   const onClose = (id) => {
setCharacters(characters.filter(character => character.id !== id))
   }
 return (
    <div className='App' style={{ padding: '25px' }} >
      <div >
        
        {location.pathname !== '/' && <Nav onSearch={onSearch}/>}
        <br></br>
        
      </div>
      <Routes>
      
        <Route  exact path='/home' element={<Cards
          characters={characters} 
          onClose={onClose}
          />}/>
          <Route  exact path='/' element={<Form login={login}/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/detail/:detailId' element={<Detail/>}/>
          <Route path='/*' element={<Errores/>}/>
         <Route path='/favorites' element={<Favorites/>}/>
        
      </Routes> 
    </div>
          
      )
    }
    
    export default App
    
      
        
      
       
      
    
      
    
     
      
