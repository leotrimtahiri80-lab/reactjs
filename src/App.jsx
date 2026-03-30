import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header'
import Herobanner from './components/herobanner'
import State from './components/State'
import UseEffect from './components/UseEffect'
import WelcomeComponents from './components/welcomecompontes'
import StatusMessage from './components/statusmessage'
import StudentsList from './components/studentslist'
import UseStateComponent from './components/UseState.jsx'
import oneChangeEvent from './components/oneChangeEvent.jsx'
import TwoStateComponent from './components/TwoStateComponent.jsx'
import DarkMode from './components/DrakMode.jsx'
function App() {


  return (
    <>
      <Header />
      <Herobanner text="Welcome" para="Lorme ipsun ha ert in." />
      <State />
      <UseEffect />
      <WelcomeComponents isLoggedIn={true} />
      <StatusMessage isOnline={true} />
      <StudentsList />
      <UseStateComponent />
      <oneChangeEvent />
      <TwoStateComponent />
      <DarkMode />
    </>
  )
}

export default App
