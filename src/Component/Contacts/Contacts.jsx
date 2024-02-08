import React from 'react'

export default function Contacts() {
  return <>
   <div className='text-center'>
  <h1 className=''>PORTFOLIO COMPONENT</h1>
  <i className=' -auto   fa-solid fa-star bg-bg-light  logo mb-5 '></i>
  </div>
  <div className='container '>
  <form className=' ' action="">

  <input className='form-control py-2 m-2 w-100 ' type="text" placeholder='userName'/>
  <input className='form-control py-2 m-2 w-100 ' type="text" placeholder='userAge'/>
  <input className='form-control py-2 m-2 w-100 ' type="emil" placeholder='userEmail'/>
  <input className='form-control py-2 m-2 w-100 ' type="password" placeholder='userPassword'/> 

  <button className='btn btn-danger text-center m-2'> send Message </button>
  </form>

  </div>

  </>
}
