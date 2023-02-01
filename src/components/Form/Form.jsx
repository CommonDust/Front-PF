import React from 'react'

const Form = () => {


    handleChange = (e) => {
      e.target.name
    }

  return (
    <div>
      <div>
      <input type='text' name='name' placeholder='Enter name' />  
      </div>
      <div>
      <input type='text' name='lastname' placeholder='Enter lastname' /> 
      </div>
      <div>
      <input type='text' name='birthday' placeholder='Enter birthday'/> 
      </div>
      <div>
      <input type='text' name='username' placeholder='Enter username'/> 
      </div>
      <div>
      <input type='text' name='hotmail' placeholder='enter hotmail'/> 
      </div>
      <div>
      <input type='text' name='password' placeholder='Enter password' onChange={}/> 
      </div>
    </div>
  )
}

export default Form
