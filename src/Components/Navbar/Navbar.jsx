import React, { useState } from 'react'
import logo from "../../Assets/logo.jpg"
import "./navbar.css"
import  Sidebar from "./Sidebar"
import { signInWithPopup, signout} from 'firebase/auth'
import {auth, provider} from '../../firebase/firebase'
function Navbar() {
  const [isDivVisibleForJob, setDivVisibleForJob]=useState(false)
  const [isDivVisibleForIntern, setDivVisibleForIntern]=useState(false)
  const [isDivVisibleForLogin, setDivVisibleForLogin]=useState(false)
  const [isStudent,setStudent]=useState(true)

  const loginFunction=()=>{
    signInWithPopup(auth,provider).then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const showLogin=()=>{
    setDivVisibleForLogin(true)
  }
  const closeLogin=()=>{
    setDivVisibleForLogin(false)
  }
  const setTrueForStudent=()=>{
    setStudent(false)
  }
  const setFalseForStudent=()=>{
    setStudent(true)
  }
  const user=1;
  return (
    <div>
      <nav className='nav1'>
        <ul>
            <div className='img'>
                <img src={logo} alt="" srcset="" />
            </div>
            <div className='elem'>
                <p id="int"className=''>Internships<i class="bi bi-caret-down-fill"></i></p>
                <p>Jobs<i class="bi bi-caret-down-fill"></i></p>
            </div>
            <div className='admin'>
                <button>Admin</button>
            </div>
            <div className='search'>
            <i class="bi bi-search"></i>
            <input type="search" placeholder='  search' />
            </div>
            <div className='auth'>
                <button className='btn1' onClick={showLogin}>Login</button>

                <button className='btn2'>Register</button>
            </div>
            <div className="flex mt-7 hire">
                Hire Talent
            </div>
           
        </ul>
      </nav>
      {
        isDivVisibleForIntern &&(
        <div className="profile-dropdown-2">
          <div className="left-section"></div>
        </div>
        )
      }
    <div className="login">
      {
        isDivVisibleForLogin && (
          < div className='box'>
           <button id="cross" onClick={closeLogin}><i class="bi bi-x"></i></button>
           <h5 id='state' className='mb-4 justify-center text-center'>
              <span id='sign-in' style={{cursor:"pointer"}} className={`auth-tab ${isStudent ? 'active':""}`} onClick={setFalseForStudent}>
                student
              </span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span  id='join-in' style={{cursor:"pointer"}} className={`auth-tab ${isStudent ? 'active':""}`} onClick={setTrueForStudent}>
                Employee
              </span>
           </h5>
           {isStudent?(
            <>
            <div className='py-6'>
              <div className="flex bg-white rounded-lg justify-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="w-full p-8 lg:w-1/2">
                  <p onClick={loginFunction} className='flex
                  items-center h-9 justify-center mt-4 text-black bg-slate-100 rounded-lg
                  hover:bg-gray=100'>
                    <div className='px-4 py-3'>
                    {/* <i class="bi bi-browser-chrome">hiiii</i> */}
                   <svg class="h-6 w-6" viewBox="0 0 48 48">
                        <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
                        <path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path>
                        <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
                        <path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path>
                        <path fill="#f44336" d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"></path>
                        <path fill="#dd2c00" d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"></path>
                        <path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"></path>
                        <path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"></path>
                        <path fill="#fff" d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"></path>
                        <path fill="#2196f3" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"></path>
                    </svg> 
                    </div>
                    <h1>Login With Google </h1>
                  </p>
<div className="mt-4 flex items-center justify-between">
  <span className="border-b- w-1/5 lg:w-1/4"></span>
  <p className='text-grey-500 text sm font-bold mb-2'>or</p>
  <span className='border-b w-1/5 lg:w-1/4'></span>
</div>

<div class="mt-4">
  <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
  <input class="text-gray-700 focuc:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full
  appearance-none" type="email"  placeholder="abc@xyz.com"/>
</div>
<div class="mt-4">
  <div class="flex justify-between">
    <label class="block text-grey-700 text-sm font-bold mb-2">Password</label>
    <a href="/" class="text-xs text-blue-500">Forget Password ?</a>
  </div>
  <input class="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full
   appearance-none" placeholder='Must be atleast 6 characters' type='password' />
</div>
<div className="mt-8">
  <button className='btn3'>Login</button>
</div>
<div className="mt-4 flex-items-center justify-between">
  <p className='text-sm'>New to Gamini ? Register(<span className='text-blue-500 cursor-pointer' onClick={closeLogin}>
  Student</span>/<span className='text-blue-500 cursor-pointer' onClick={closeLogin}>
  Company</span>)
  </p>

</div>
                </div>
              </div>
            </div>
            </>
           ):(
            <>
  <div className="flex bg-white rounded-lg justify-center overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="w-full p-8 lg:w-1/2">           
<div class="mt-4">
  <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
  <input class="text-gray-700 focuc:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full
  appearance-none" type="email"  placeholder="abc@xyz.com"/>
</div>
<div class="mt-4">
  <div class="flex justify-between">
    <label class="block text-grey-700 text-sm font-bold mb-2">Password</label>
    <a href="/" class="text-xs text-blue-500">Forget Password ?</a>
  </div>
  <input class="text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full
   appearance-none" placeholder='Must be atleast 6 characters' type='password' />
</div>
<div className="mt-8">
  <button className='btn3'>Login</button>
</div>
<div className="mt-4 flex-items-center justify-between">
  <p className='text-sm'>New to Gamini ? Register(<span className='text-blue-500 cursor-pointer' onClick={closeLogin}>
  Student</span>/<span className='text-blue-500 cursor-pointer' onClick={closeLogin}>
  Company</span>)
  </p>

</div>
</div>
</div>
            </>
           )

           }
          </div>
        )
      }
    </div>
      <Sidebar/>
    </div>
  )
}

export default Navbar;
