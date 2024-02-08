import React from 'react'
import Imgs1 from "../../assets/Imges/poert1.png"
import Imgs2 from "../Portfolio/port2.png"
import Imgs3 from "../Portfolio/port3.png"

export default function Portfolio() {
  return <>
    <div className='text-center'>
      <h1 className='p-3'>PORTFOLIO COMPONENT</h1>
      <i className=' -auto fa-solid fa-star bg-bg-light  logo mb-5 '></i>
    </div>

    <div className="container">
      <div className='row gy-5 p-2 m-4 '>
        <div className="col-md-4 ">
          <div className="item">
            <img className='w-100 border rounded-3 ' src={Imgs1} alt="" />
            <a data-bs-toggle="model" data-bs-target="exampleModal-3" className="title"><i className="fa-solid fa-add"></i></a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="item">
            <img className='w-100 border rounded-3 ' src={Imgs2} alt="" />
            <a data-bs-toggle="model" data-bs-target="exampleModal-3" className="title"><i className="fa-solid fa-add"></i></a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="item">
            <img className='w-100 border rounded-3 ' src={Imgs3} alt="" />
            <a data-bs-toggle="model" data-bs-target="exampleModal-3" className="title"><i className="fa-solid fa-add"></i></a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="item">
            <img className='w-100 border rounded-3 ' src={Imgs1} alt="" />
            <a data-bs-toggle="model" data-bs-target="exampleModal-3" className="title"><i className="fa-solid fa-add"></i></a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="item">
            <img className='w-100 border rounded-3 ' src={Imgs2} alt="" />
            <a data-bs-toggle="model" data-bs-target="exampleModal-3" className="title"><i className="fa-solid fa-add"></i></a>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="item">
            <img className='w-100 border rounded-3 ' src={Imgs3} alt="" />
            <a data-bs-toggle="model" data-bs-target="exampleModal-3" className="title"><i className="fa-solid fa-add"></i></a>
          </div>
        </div>


        <div class="modal fade bg-dark bg-opacity-75" id="exampleModal-3" tabindex="-1"
          aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body p-1">
                <img src={Imgs1} className='w-100' alt="" />

              </div>

            </div>
          </div>
        </div>


      </div>
    </div>









  </>
}
