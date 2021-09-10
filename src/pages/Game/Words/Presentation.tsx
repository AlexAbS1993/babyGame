import {FC, useEffect, useState} from 'react'
import {Button} from '../../../components/Buttons/Button'
import {WordsGameTouchEvents} from '../../../controllers/WordsGame/wordsGameTouchEvents'
import classes from './WordsGame.module.css'

export const Presentation: FC<{
  setStage: any
  words: any
}> = ({setStage, words}) => {
  const [step, setStep] = useState(0)
  const [startPos, setStartPos] = useState(0)
  const [gameStageEnd, setGameStageEnd] = useState(false)
  useEffect(() => {
    return () => {
      clearTimeout()
    }
  }, [])
  return (
    <>
      <div
        className={`${classes.gameField} ${
          gameStageEnd ? classes.gameField_gone : classes.gameField_active
        }`}
        onTouchStart={(e: any) => {
          WordsGameTouchEvents.touchStart(e, setStartPos)
        }}
        onTouchEnd={(e: any) => {
          WordsGameTouchEvents.touchEnd(e, startPos, step, words, setStep)
        }}
      >
        <section className={classes.gameField__letter}>
          <h1 key={words[step].big}>{words[step].big}</h1>
        </section>
        <section className={classes.gameField__images}>
          {words[step].words.map((word: any) => {
            return (
              <div key={word.title} className={classes.gameField__container}>
                <ImageAndDiscription word={word} />
              </div>
            )
          })}
        </section>
        <div
          className={`${classes.buttonNextStep} ${
            step === 2
              ? classes.buttonNextStep_visible
              : classes.buttonNextStep_hidden
          }`}
        >
          <ButtonNextStepWrapper
            setGameStageEnd={setGameStageEnd}
            setStage={setStage}
          />
        </div>
      </div>
    </>
  )
}

type ButtonNextStepWrapperType = {
  setGameStageEnd: any
  setStage: any
}

const ButtonNextStepWrapper: FC<ButtonNextStepWrapperType> = ({
  setGameStageEnd,
  setStage,
}) => {
  useEffect(() => {
    return () => {
      clearTimeout()
    }
  }, [])
  return (
    <Button
      events={{
        onClickEvent: (e: any) => {
          WordsGameTouchEvents.nextStep(setGameStageEnd, setStage)
        },
      }}
      type="directionButton"
      subtype="rigth"
    />
  )
}

const ImageAndDiscription = ({word}: any) => {
  const [isActive, setActive] = useState(false)
  return (
    <>
      <img
        src={word.svg}
        title={word.title}
        onClick={(e) => {
          setActive((prev) => !prev)
        }}
      />
      <div
        className={`${classes.img__discription} ${
          isActive
            ? classes.img__discription_active
            : classes.img__discription_disabled
        }`}
      >
        {word.discription}
      </div>
    </>
  )
}
