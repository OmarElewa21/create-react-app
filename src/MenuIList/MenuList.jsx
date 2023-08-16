import style from './MenuList.module.css'
import { MenuListItem } from '../MenuListItem/MenuListItem'
import { DIFFICULTIES } from './constants'

export function MenuList (props) {
  return (
    <div className={style.container}>
      {DIFFICULTIES.map((difficulty, index) => {
        return (
          <MenuListItem
            key={index}
            currentDifficulty={props.difficulty}
            handleDifficultyChange={props.handleDifficultyChange}
            difficulty={difficulty}
          />
        )
      })}
    </div>
  )
}
