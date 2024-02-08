import React from 'react'

export default function Footer() {
  return <>
 
  <footer className='bg-info'>
  <div className="d-flex justify-align-content-end p-5 bg-warning" >
    <div className='col-md-3 ps-5 md-5 '>
      <div className='container'>
      
      <h3>LOCATION</h3>
       <p>2215 John Daniel Drive</p>
       <p>Clark, MO 65243</p>
      </div>
       </div>
       <div className='col-md-3 ps-5 md-5 '>
       <h3 className='p-0'>AROUND THE WEB</h3>
       <p className='ps-5'>
       <i class="p-2 border border-black rounded-circle  fa-brands fa-facebook mx-1 icon "></i>
       <i class="p-2 border border-black rounded-circle  fa-brands fa-twitter  mx-1 icon "></i>
       <i class="p-2 border border-black rounded-circle  fa-brands fa-linkedin mx-1 icon "></i>
       <i class="p-2 border border-black rounded-circle  fa-brands fa-youtube mx-1 icon "></i>
       </p>
     
       </div>
       <div className='col-md-4 ms-auto '>
       <h3 className='p-1'>ABOUT FREELANCER</h3>
       <p>Freelance is a free to use, licensed Bootstrap </p>
       <h6 className='ps-5'>theme created by Route</h6>
       </div>
       
    </div>

  <div className='p-2 text-center bg-secondary'>
  <p className='p-3'>Copyright © Your Website 2021</p>
  </div>

  </footer>
  
    
  </>
}
