import React from 'react'
import { Link } from 'wouter'
import { useLocation } from "wouter";

const HeaderNav = () => {
  const [_, setLocation] = useLocation();

  return (
    <nav className='flex gap-2 m-2 p-2 justify-around border-red-400'>
      <a onClick={() => setLocation("/")}>LOGO</a>
      <Link href="/formulario">Formulario</Link>
      <Link href="/todo">To-do</Link>
    </nav>
  )
}

export default HeaderNav
