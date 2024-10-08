import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import { MdOutlineLocalHospital } from "react-icons/md";

const Navbar = () => {
 const[showMenu,setShowMenu] = useState(false);
 const[token,setToken] = useState(true);

    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
        <div className="flex items-center" onClick={()=>navigate('/')}>
        <MdOutlineLocalHospital className="text-primary text-4xl" />
      <p className="text-2xl font-bold text-primary">AppointDoc</p>
      </div>
     {/* <img className="w-44 cursor-pointer" src={assets.logo} alt="" /> */}
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/doctors">
          <li  className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/about">
          <li  className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to="/contact">
          <li  className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
            token ? <div className="flex items-center gap-2 cursor-pointer group relative">
                <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
                <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                <div className="absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                    <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                        <p className="hover:text-black cursor-pointer" onClick={() =>navigate("/my-profile")}>My Profile</p>
                        <p className="hover:text-black cursor-pointer"  onClick={() =>navigate("/my-appointments")}>My Appointments</p>
                        <p className="hover:text-black cursor-pointer"  onClick={() =>setToken(false)}>Logout</p>
                    </div>
                </div>
            </div> :
         <button className="text-white bg-primary px-8 py-3 rounded-full font-light hidden md:block " onClick={()=> navigate('/login')}>Create account</button>
        }
      <img onClick={()=> setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
      {/* mobile menu */}
      <div className={`${showMenu ? 'fixed w-full': 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className="flex items-center justify-between px-5 py-6">
        <div className="flex items-center w-36" onClick={()=>navigate('/')}>
        <MdOutlineLocalHospital className="text-primary text-2xl" />
      <p className="text-xl font-bold text-primary">AppointDoc</p>
      </div>
          <img className="w-6" onClick={()=> setShowMenu(false)} src={assets.cross_icon} alt="" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
          <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
          <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
          <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
        </ul>
      </div>
      </div>
    </div>
  );
};
export default Navbar;
