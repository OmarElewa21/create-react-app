import { DisplayDifficulty } from './DisplayDifficulty/DisplayDifficulty'
import { MenuList } from './MenuIList/MenuList'
import style from './App.module.css'
import { useState } from 'react'

export default function App () {
  const [currentDifficulty, setcurrentDifficulty] = useState('')

  const handleDifficultyChange = difficulty => {
    setcurrentDifficulty(difficulty)
  }

  return (
    <div className={style.root}>
      <h1>Select Your Difficulty</h1>
      <div className={style.workspace}>
        <MenuList
          handleDifficultyChange={handleDifficultyChange}
          difficulty={currentDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </div>
  )
}
