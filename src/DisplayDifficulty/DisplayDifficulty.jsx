import style from './DisplayDifficulty.module.css'

export function DisplayDifficulty (props) {
  return (
    <div className={style.container}>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : 'Difficulty not set'}
    </div>
  )
}
