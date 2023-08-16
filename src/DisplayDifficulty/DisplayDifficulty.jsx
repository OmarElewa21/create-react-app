import style from './style.module.css'

export function DisplayDifficulty (props) {
  return (
    <div className={style.container}>
      {props.difficulty
        ? `Difficulty set to ${props.difficulty}`
        : 'Difficulty not set'}
    </div>
  )
}
