import React from 'react';
import SearchBar from './SearchBar.jsx'
import style from './NavStyle.module.css';
import { Link } from 'react-router-dom';
import  Rm  from '../img/Rm.png';

const Nav = ({onSearch}) =>{
    
    return (
      <div className={style.container} >
      <nav className={style.nav}>
      
        <SearchBar className={style.search}
          onSearch={onSearch}/>
      
      </nav>
      <div><img src={Rm} alt='silueta'  className={style.Rm}/></div>
      <div>
        <ul>
          <Link to={'/home'} className={style.home}>
          <li className={style.homeLi}>Home</li>
          </Link>
        </ul>
      </div>
      
      <div className={style.containerli}>
        <ul>
          <Link   to={'/about'} className={style.home}>
          <li className={style.aboutLi}>About</li>
          </Link>
        </ul>
        <div className={style.containerButton}>
          <Link to={'/'}>
          <button className= {style.logout}> Logout</button>
          </Link>
        </div>
        <div>
        <ul>
          <Link to={'/favorites'} className={style.home}>
          <li className={style.homeLi2}>Favorites</li>
          </Link>
        </ul>
      </div>
      </div>
      
      </div>
    );
}


export default Nav