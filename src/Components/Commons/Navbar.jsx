import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
  
    const {user,signOutUser} = use(AuthContext)
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const navigate = useNavigate();
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  // console.log(user);
  const handleSignOut = () =>{
           signOutUser()
           .then(()=>{
             navigate('/')
           })
          .catch(err =>{
            console.log(err);
            
          })
  }

    const links = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/bills">Bills</NavLink>
    <NavLink to="/auth/login">Login</NavLink>
    <NavLink to="/auth/register">Register</NavLink>
    </>
    const links2 = <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/bills">Bills</NavLink>
    <NavLink className='mr-4' to="/my-pay-bills">MyPayBills</NavLink>
   
    </>

     const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };


    return (
       <div className="navbar bg-base-100 shadow-sm lg:px-10 sticky top-0 z-10">
  <div className="flex-1">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content lg:hidden  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col flex-1 gap-3">
        {user ? links2 : links}
      </ul>
</div>
<div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">BM</span>
                            </div>
                            <span className="text-xl font-bold">BillManager</span>
                        </div>
  {/* <figure><img className='w-12 h-12' src="https://cdn-icons-png.flaticon.com/128/1052/1052815.png" alt="" /></figure> */}
   {/* <img className='w-10 h-10' src="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" alt="" /> */}
  </div>
  <div className="flex gap-2">
    <div className='flex gap-5 items-center'>
        {user ? links2 : links}
         <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>

    </div>
     
    
     {user && (
  <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img
        referrerPolicy='no-referrer'
        alt="User Avatar" src={user.photoURL} />
      </div>
    </div>
    
   
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li><a>Profile</a></li>
      <li><button onClick={handleSignOut}>Logout</button></li>
    </ul>
  </div>
)}
   
  </div>
</div>
    );
};

export default Navbar;