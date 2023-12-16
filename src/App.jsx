import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './componet/Header.componet'
import { Porfile } from './componet/Profile.componet'
import { Portfolio } from './componet/PortFolio.componet'
import { About } from './componet/About.componet'


function App() {


  return (
    <>
    <Header/>
     <Porfile/>
     <Portfolio/>
     <About name={"About"} />
     <About name={"Contact"} contact={892929}  />
      
    </>
  )
}

export default App
