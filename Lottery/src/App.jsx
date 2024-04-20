import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LotteryPart, sum } from './LotteryPart'


function App() {

  
  function isWin(arr){
    let win = sum(arr)==15;
    return win;
  }

  return (
    <>
    <LotteryPart n={3} isWin={isWin}></LotteryPart>
    </>
  )
}

export default App;
