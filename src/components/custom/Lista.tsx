import React from 'react'

interface Props {
  lista: Array<string>
}

const Lista = ({ lista }: Props) => {
  return (
    <ul className='list-none p-0'>
      {
        lista.map((element, index) => <li className='bg-[#61dafb] p-1 m-1 border-r-2' key={index}>{element}</li>)
      }
    </ul>
  )
}

export default Lista
