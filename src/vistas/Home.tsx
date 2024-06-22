import HeaderNav from '@/components/custom/HeaderNav'
import TextoAnidado from '@/components/custom/TextoAnidado'
import React from 'react'

const Home = () => {
  return (
    <>
      <HeaderNav />
      <p>
        Hola soy la vista Home!!
      </p>

      <TextoAnidado >
        <p>Hola soy un child</p>
      </TextoAnidado>

    </>
  )
}

export default Home
