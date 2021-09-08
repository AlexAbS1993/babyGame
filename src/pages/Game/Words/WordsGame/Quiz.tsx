import {FC, useContext, useEffect, useState} from 'react'
import {quizCreator} from './functions'
import classes from './WordsGame.module.css'
import StageContext from '../../../../context'
import {useHistory} from 'react-router'
const ura = require('../../../../assets/sounds/ura.mp3')

export const Quiz: FC<{words: any}> = ({words}) => {
  // Приветственный фон
  const [isGreetings, setGreetings] = useState(true)
  // Список вопросов в викторине
  const [quizQuestions, setQuizQuestions] = useState<any[]>([])
  // Инициализация
  const [initialize, setInitialize] = useState(false)
  // Какой раунд, победил ли пользователь, сделал ли он правильный выбор (для блокировки кнопки)
  const [currentRound, setCurrentRound] = useState(0)
  const [isWin, setWin] = useState(false)
  const [iHaveDoneAChoose, setDoneChoose] = useState(false)
  // Использования контекста и роутинга для переброса в меню
  const {stage, setStage} = useContext(StageContext)
  const history = useHistory()
  useEffect(() => {
    setQuizQuestions(quizCreator(words))
    setInitialize(true)
  }, [])
  useEffect(() => {
    if (initialize && currentRound === quizQuestions.length) {
      setWin(true)
      new Audio(ura.default).play()
    }
  }, [currentRound])
  return (
    <>
      {isWin && (
        <div
          className={classes.win}
          onClick={() => {
            setStage('menu')
            history.push('/')
          }}
        >
          <h1>УРА!!!</h1>
        </div>
      )}
      {initialize && !isWin && currentRound < quizQuestions.length && (
        <section className={classes.qiuz}>
          <div className={classes.qiuz__letter}>
            <div
              className={`${classes.quiz__greetings} ${
                isGreetings
                  ? classes.quiz__greetings_active
                  : classes.quiz__greetings_gone
              }`}
            >
              <h1
                onClick={(e) => {
                  setGreetings(false)
                }}
              >
                Проверь себя, малыш!
              </h1>
            </div>
            {quizQuestions[currentRound].letter}
          </div>
          <div className={classes.quiz__variants}>
            {quizQuestions[currentRound].variants.map(
              (variant: any, index: number) => {
                return (
                  <div
                    key={`${variant.title}${index}`}
                    className={classes.variant}
                  >
                    <VariantContainer
                      variant={variant}
                      setCurrentRound={setCurrentRound}
                      iHaveDoneAChoose={iHaveDoneAChoose}
                      setDoneChoose={setDoneChoose}
                    />
                  </div>
                )
              }
            )}
          </div>
        </section>
      )}
    </>
  )
}

const wrongSound = require('../../../../assets/sounds/wrong.mp3')
const rightSound = require('../../../../assets/sounds/right.mp3')

const VariantContainer: FC<{
  variant: any
  setCurrentRound: any
  iHaveDoneAChoose: boolean
  setDoneChoose: any
}> = ({variant, setCurrentRound, setDoneChoose, iHaveDoneAChoose}) => {
  const [wrong, setWrong] = useState(false)
  const [congratulation, setCongratulation] = useState(false)
  useEffect(() => {
    return () => {
      clearTimeout()
    }
  }, [])
  return (
    <>
      <button
        className={`${classes.quiz__button} ${
          wrong ? classes.quiz_wrong : classes.quiz_simple
        } ${congratulation ? classes.quiz_cong : classes.quiz_nocong}`}
        onClick={(e) => {
          if (variant.right) {
            let audio = new Audio(rightSound.default)
            audio.volume = 0.2
            audio.play()
            setCongratulation(true)
            setDoneChoose(true)
            setTimeout(() => {
              setCongratulation(false)
              setDoneChoose(false)
            }, 1000)
            setTimeout(() => {
              setCurrentRound((prev: any) => {
                let newStep = prev + 1
                return newStep
              })
            }, 1500)
          } else {
            new Audio(wrongSound.default).play()
            setWrong(true)
            setTimeout(() => {
              setWrong(false)
            }, 1000)
          }
        }}
        disabled={iHaveDoneAChoose ? true : false}
      >
        <img src={variant.svg} alt={variant.title} />
      </button>
    </>
  )
}
