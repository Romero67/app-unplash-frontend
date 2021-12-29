import React, {useState, useEffect} from 'react'
import {getArticules, authenticate, signgin} from '../helpers/apiCore';
import Card from './Card';
import '../css/Home.css'
import Nav from './Nav';
import CreateImg from './CreateImg';
import RemoveImg from './RemoveImg';


const Home = () => {
 const [articules, setArticules] = useState([])
 const [visible, setVisible] = useState(false)
 const [load, setLoad] = useState(false)
 const [busqueda, setBusqueda] = useState('')
 const [deleting, setDeleting] = useState(false)
 const [artToDelete, setArtToDelete] = useState(null)


 useEffect(() => {

  if(localStorage.getItem('jwt')){
    return;
  }

  signgin().then(data => {
    authenticate(data)
  });
 }, []);

 useEffect(() => {
  getArticules().then(data => setArticules(data));
 }, [load]);

 const handlerClick = () =>{
  setVisible(!visible);
 }

 const handlerClickDeleting = () =>{
  setDeleting(!deleting);
 }

 const changeLoad = () =>{
  setLoad(!load);
 }

 return (
  <div className='container'>
   <Nav handlerClick={handlerClick} setBusqueda={setBusqueda}/>
   <div className='body'>
    <div className='grid-container'>
     {articules.map((el, index) => {
      const desc = el.description.toLowerCase();
      if(desc.includes(busqueda))
      return <Card className='grid-item' key={index} articule={el} setArtToDelete={setArtToDelete} handlerClickDeleting={handlerClickDeleting}/>
      else return null;
     }).reverse()}
    </div>
    <CreateImg visible={visible} handlerClick={handlerClick} changeLoad={changeLoad}/>
    <RemoveImg deleting={deleting} changeLoad={changeLoad} artToDelete={artToDelete} handlerClickDeleting={handlerClickDeleting}/>
   </div>
  </div>
 )
}

export default Home
