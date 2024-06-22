import './App.css'
import React from 'react'
import { Button } from './components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Button>Click me</Button>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  )
}

export default App
