import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Herobanner from './components/herobanner'
import State from './components/State'
import UseEffect from './components/UseEffect'

function App() {


  return (
    <>
      <Header />
      <Herobanner text="Welcome" para="Lorme ipsun ha ert in." />
      <State />
      <UseEffect />
    </>
  )
}

export default App
