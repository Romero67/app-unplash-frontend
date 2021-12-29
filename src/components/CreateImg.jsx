import React, {useState} from 'react'
import {createImg} from '../helpers/apiCore'

const formInitial = {
 description: '',
 url: ''
}

const CreateImg = ({visible, handlerClick, changeLoad}) => {
 const [values, setValues] = useState(formInitial);
 const {description, url} = values;

 const handleChange = (e) =>{
  setValues({
   ...values,
   [e.target.name]: e.target.value
  })
 }

 const handlerClickCancel = (e) =>{
  e.preventDefault();
  setValues(formInitial);
  handlerClick();
 }

 const handlerClickSubmit = (e) =>{
  e.preventDefault();
  createImg(values);
  setValues(formInitial);
  changeLoad();
  handlerClick();
 }

 return (
  <div>
   <div className={visible ? 'container-add add-visible' : 'container-add'}>
     <div className='card-add'>
      <h4>Add a new photo</h4>
      <div className='add-body'>
       <label htmlFor="description">label</label>
       <input type="text" name='description' id='description' value={description} onChange={handleChange} placeholder='Description'/>
       <label htmlFor="url">photo url</label>
       <input type="text" name='url' id='url' value={url} onChange={handleChange} placeholder='http://localhost:5000/api/articule/photo/61c77244f15972670dcfe2e3'/>
       <div className='container-buttons'>
        <button className='btn btn-cancel' onClick={handlerClickCancel}>Cancel</button>
        <button className='btn btn-aceptar' onClick={handlerClickSubmit}>Submit</button>
       </div>
      </div>
     </div>
    </div>
  </div>
 )
}

export default CreateImg
