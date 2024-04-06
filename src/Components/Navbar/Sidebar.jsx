import React, { useEffect, useState } from 'react'
import logo from "../../Assets/logo.jpg"
import "./sidebar.css"
import {Link,useLinkClickHandler,useNavigate} from 'react-router-dom'
import { signInWithPopup, signOut} from 'firebase/auth'
import {auth, provider} from '../../firebase/firebase'


function Sidebar(){
    const[sidebarOpen,setSidebarOpen]=useState
    (false);
    const openSidebar=()=>{
        setSidebarOpen(true)
    }
    const closeSidebar=()=>{
        setSidebarOpen(false)
    }
    useEffect(()=>{
        const handleOutsideclick=(e)=>{
            if(sidebarOpen && !e.target.closest('.sidebar')&&
             !e.target.closest('open-btn')){
                closeSidebar()
             }
        }
        document.addEventListener('click',handleOutsideclick)
        return()=>{
            document.removeEventListener('click',
            handleOutsideclick)
        }
    },[sidebarOpen])
    const user=1;
    return(
        <>
    <div className="App2 -mt-2 overflow-hidden" >
        <Link to="/">
        <img src={logo} alt="" id="nav2-img" />
        </Link>
        
        <div className={`sidebar ${sidebarOpen ? 'open':''}`}>
        <span className='cursor-pointer close-btn' onclick={closeSidebar}>
            &times;

        </span>
        {
            user?(
            <>
                <div className='profile'>
                    <Link to={"/profile"}>
                        <img className="rounded-full justify-center" src={user.photo} alt="" srcset=""/>
                    </Link>
                    <p className='text-center'>Profile name
                    <span className='font-bold text-blue-500'>{user?.name}</span></p>
                </div>
                </>
            ):
            (
                
                <div className='auth'>

                </div>
               
            )
        }
        <Link to="/internship">Internships</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/" className="small">Contact Us</Link>
        <hr />
        { user?(
            <>
            <div className='addmore'>
            {
            user?(
                <Link to={'/applications'}>
                    <p>My Applications</p>
                </Link>    
            ):(
                <Link to={'/register'}>
                    <p>My applications(register)</p>
                </Link>
                
            )
            }
             <Link>
            <p>View Resume</p>
        </Link>
        <Link>
            <p>More</p>
        </Link>
        <br />
        <br />
        <button onClick={()=>{
            signOut(auth)
        }}>
            Log Out <i class="bi bi-box-arrow-right"></i>
        </button>
            </div>
            </>
            ):(
                <div className='addmore'>
                    <p>Register- As a Student</p>
                    <p>Register- As a  Employee</p>
                    <br />
                    <br />
                </div>
            )
        }
        
        </div>
        <div className='main'>
            <span style={{fontSize:"22px"}} className="open-btn" onClick={openSidebar}>
            &#9776;
             </span>
        </div>
        <div className='search2'>
            <i className='bi bi-search'></i>
            <input type="search" placeholder='Search' />
        </div>

        {user?(
            <>
            BookMarks
            <i class="text-red-600 bi bi-bookmarks"></i>
            </>
        ):(
            <>
            <Link to="/register">
                <button className='btn4'>
                    Register
                </button>
            </Link>
            <div>
            <Link to={"/adminLog"}>
                <button id='admin'>Admin Login</button>
            </Link>
            </div>
            </>
        )
        }
         
            <p className="text-red-300">Hire Talent</p>
       
         </div>
        </>
    );
}
            
export default Sidebar;


