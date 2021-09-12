import {useHistory} from 'react-router'
import classes from './WinScreen.module.css'
import kid from './svg/kid.svg'
import confetti from './svg/confetti.gif'
import {FC, useEffect} from 'react'
import {music} from '../../music/music'

type WinScreenType = {
  setStage: (arg: 'menu' | 'game') => void
  requiredStage: 'menu' | 'game'
  path: string
}

export const WinScreen: FC<WinScreenType> = ({
  setStage,
  requiredStage,
  path,
}) => {
  const history = useHistory()
  useEffect(() => {
    music.quizWin()
  }, [])
  return (
    <div
      className={classes.win}
      onClick={() => {
        setStage(requiredStage)
        history.push(path)
      }}
    >
      <h1>УРА!!!</h1>
      <img src={kid} className={classes.kidUra} />
      <img src={confetti} className={classes.confetti} />
    </div>
  )
}
