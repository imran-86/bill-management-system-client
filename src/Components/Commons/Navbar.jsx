import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {
  
    const {user,signOutUser} = use(AuthContext)
     const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  // console.log(user);
  const handleSignOut = () =>{
           signOutUser()
           .then(()=>{
             
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
       <div className="navbar bg-base-100 shadow-sm lg:px-10">
  <div className="flex-1">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex flex-col flex-1 gap-3">
       {links}
      </ul>
</div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
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