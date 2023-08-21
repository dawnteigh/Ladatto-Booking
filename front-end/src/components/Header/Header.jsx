import React, { useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from "react-icons/bi"

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header')
    } else {
      headerRef.current.classList.remove('sticky__header')
    }
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)

  })

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  const navLinks = [
    {
      path: '/home',
      display: 'Home'
    },
    {
      path: '/contact',
      display: 'Contact'
    }
  ]

  return (
    <header className="header flex items-center" ref={headerRef} >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo goes here */}
          <div>
            <img />
          </div>

          {/* nav goes here */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu} >
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((l, i) => {
                  <li key={i} >
                    <NavLink
                      to={l.path}
                      className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>
                      {l.display}
                    </NavLink>
                  </li>
                })
              }
            </ul>
          </div>

          { /* right navigation */}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img className='w-full rounded-full' alt="user-image" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px'>
                Login
              </button>
            </Link>

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header