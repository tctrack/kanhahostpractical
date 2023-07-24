import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className='shadow-md py-3'>
            <div className='container px-10'>
                <div className='flex justify-between items-center'>
                    <div className='headerLogo'>
                        <h1>
                            <Link to={'/'}><span className='text-blue-700 font-semibold text-2xl'>
                            Our</span> Events</Link>
                        </h1>
                    </div>
                    <div className='flex gap-6'>
                        <NavLink  to={'/'} className='hover:text-blue-700 font-semibold' activeClassName="active">Event From</NavLink>
                        <NavLink  to={'/eventData'} className='hover:text-blue-700 font-semibold' activeClassName="active">Event List</NavLink>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header