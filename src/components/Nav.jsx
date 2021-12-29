import React, { useState } from 'react'
import '../css/Nav.css'

const Nav = ({handlerClick, setBusqueda}) => {
 const [cadena, setCadena] = useState('')

 const handleChange = (e) => {
  setCadena(e.target.value);
 }

 const handleKeyPress = (e) =>{
  if(e.code == 'Enter'){
   setBusqueda(cadena);
  }
 }

 return (
  <div className='navbar'>
   <div className='navbar-left'>
    <h4>LOGO</h4>
    <input type="text" placeholder='Search by name' onChange={handleChange} onKeyPress={handleKeyPress} value={cadena}/>
   </div>
   <button className='btn btn-aceptar' onClick={handlerClick}>Add a new photo</button>
  </div>
 )
}

export default Nav
