import React, { useState } from 'react'
import {removeImage, isAuthenticated} from '../helpers/apiCore'

const RemoveImg = ({deleting, handlerClickDeleting, changeLoad, artToDelete}) => {

  const [pass, setPass] = useState('')

  const user = isAuthenticated();
  const handleClick = async () =>{
  await removeImage(artToDelete._id, user.token, pass).then(data => console.log(data));
  changeLoad();
  handlerClickDeleting();
  setPass('');
 }

 const handleChange = (e) => {
   setPass(e.target.value);
 }

 return (
  <div>
   <div className={deleting ? 'container-add add-visible' : 'container-add'}>
   <div className={'container-add add-visible'}>
     <div className='card-add'>
      <h4>Are you sure?</h4>
      <div className='add-body'>
       <label htmlFor="pass">Password</label>
       <input type="password" name='pass' id='pass' placeholder='Password' onChange={handleChange} value={pass}/>
       <div className='container-buttons'>
        <button className='btn btn-cancel' onClick={handlerClickDeleting}>Cancel</button>
        <button className='btn btn-eliminar' onClick={handleClick}>Delete</button>
       </div>
      </div>
     </div>
    </div>
  </div>
  </div>
 )
}

export default RemoveImg
