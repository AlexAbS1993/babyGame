import {FC, useContext, useEffect, useState} from 'react'
import {quizCreator} from './functions'
import classes from './WordsGame.module.css'
import {music} from '../../../music/music'
import close from './svg/close.svg'
import ok from './svg/ok.svg'
import {addStatistic} from '../../../controllers/Statistic/statistic'

export const Quiz: FC<{words: any; setStageIndex: any}> = ({
  words,
  setStageIndex,
}) => {
  // Приветственный фон
  const [isGreetings, setGreetings] = useState(true)
  // Список вопросов в викторине
  const [quizQuestions, setQuizQuestions] = useState<any[]>([])
  // Инициализация
  const [initialize, setInitialize] = useState(false)
  // Какой раунд, победил ли пользователь, сделал ли он правильный выбор (для блокировки кнопки)
  const [currentRound, setCurrentRound] = useState(0)
  const [iHaveDoneAChoose, setDoneChoose] = useState(false)
  // Использования контекста и роутинга для переброса в меню
  useEffect(() => {
    setQuizQuestions(quizCreator(words))
    setInitialize(true)
  }, [])
  useEffect(() => {
    if (initialize && currentRound === quizQuestions.length) {
      setStageIndex((prev: any) => prev + 1)
    }
  }, [currentRound])
  return (
    <>
      {initialize && currentRound < quizQuestions.length && (
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
            music.rightAnswer()
            setCongratulation(true)
            setDoneChoose(true)
            addStatistic('right')
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
            music.wrongAnswer()
            setWrong(true)
            addStatistic('wrong')
            setTimeout(() => {
              setWrong(false)
            }, 1000)
          }
        }}
        disabled={iHaveDoneAChoose ? true : false}
      >
        <img src={variant.svg} alt={variant.title} />
        <img
          src={close}
          className={`${classes.svg__simple} ${
            wrong ? classes.svg__simple_wrong : classes.svg__simple_right
          }`}
        />
        <img
          src={ok}
          className={`${classes.svg__simple} ${
            congratulation
              ? classes.svg__simple_wrong
              : classes.svg__simple_right
          }`}
        />
      </button>
    </>
  )
}
