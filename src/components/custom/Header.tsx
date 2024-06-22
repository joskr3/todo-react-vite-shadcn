import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { List } from 'lucide-react'
import Lista from './Lista'


const Header = () => {
  const mockData = ["tarea1", "tarea2", "tarea3"]

  const [tareas, setTareas] = useState([])
  const [input, setInput] = useState('')

  const agregarTarea = () => {
    if (input) {
      setTareas([...tareas, input])
      setInput('')
    }
  }

  return (
    <header className='flex flex-col'>
      <h1>
        Todo
      </h1>
      <Input type="text" placeholder="Tareas pendientes" value={input} onChange={(evento) => setInput(evento.target.value)} />
      <Button className="m-4 rounded-lg" variant='pinky' onClick={agregarTarea}>Nueva Tarea</Button>
      <Lista lista={tareas} />

      
      
    </header>
  )
}

export default Header
