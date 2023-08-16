import { useState } from 'react'
import style from './MenuListItem.module.css'

export const MenuListItem = props => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${style.container} ${
        isHovered ? style.hovered : style.notHovered
      } ${props.currentDifficulty === props.difficulty ? style.selected : ''}`}
      onClick={() => props.handleDifficultyChange(props.difficulty)}
    >
      Set to: {props.difficulty}
    </div>
  )
}
