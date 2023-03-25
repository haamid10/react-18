import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo,menu,close} from '../assets'

const Navbar = () => {
  const [active ,setActive] = useState('')
  const [toggle ,setToggle] = useState(false)
  return (
    <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2'
        onClick={()=>{setActive("");
        window.scrollTo(0,0);
        }}>
          <img src={logo} alt="logo" className='w-8 h-8 object-contain'/>
          <p className=' text-white text-[19px] font-bold cursor-pointer flex'>A.haamid &nbsp; <span className='sm:block hidden'>
            |   Haamid10</span></p>
        </Link>

        <ul className=' list-none hidden sm:flex flex-row gap-10 '>
          {navLinks.map((link)=>(
            <li
              key={`${link.id}`}
              className={ `${active === link.title ? "text-white": "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)} 
               >
              <a href={ `#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden justify-end flex flex-1 items-center'>
          <img src={toggle ? menu : close} alt="menu" className=' w-[28px] h-[28px] object-contain cursor-pointer ' onClick={()=> setToggle(!toggle)} />

          <div className={`${toggle ? 'hidden' : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className=' list-none flex flex-col gap-4 justify-end items-start '>
          {navLinks.map((links)=>(
            <li
              key={`${links.id}`}
              className={ `${active === links.title ? "text-white": "text-secondary"}  text-[16px] font-poppins font-medium cursor-pointer`}
              onClick={() =>
                {
                  setToggle(!toggle)
                  setActive(links.title)
              }
              }>
              <a href={ `#${links.id}`}>{links.title}</a>
            </li>
          ))}
        </ul>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar