import {FC, useEffect, useMemo, useState} from 'react'
import {ImagePickType, PresentationComponentType} from './Presentation.types'
import classes from './Presentation.module.css'
import {config} from '../../../../config/config'
export const PresentationAnimalGame: FC<PresentationComponentType> = ({
  setStageIndex,
  animalList,
}) => {
  const [getHowChecked, setChecked] = useState(0)
  useEffect(() => {
    return () => {
      clearTimeout()
    }
  }, [])
  useEffect(() => {
    if (getHowChecked === config.animalGame.countOfAnimals) {
      setTimeout(() => {
        setStageIndex((prev: any) => prev + 1)
      }, config.delays.AnimalGame.presentationEndOfStage)
    }
    return () => {
      clearTimeout()
    }
  }, [getHowChecked])
  const [isDisabledAllButtons, setDisabledAllButtons] = useState(false)
  useEffect(() => {}, [getHowChecked])
  var style = useMemo(() => {
    return {
      '--repeat-rows': Math.ceil(
        config.animalGame.countOfAnimals / config.animalGame.__rows
      ),
    }
  }, [config.animalGame.countOfAnimals]) as React.CSSProperties
  return (
    <section className={classes.animalGame} style={style}>
      {animalList.map((element) => {
        return (
          <ImagePick
            element={element}
            setChecked={setChecked}
            isDisabledAllButtons={isDisabledAllButtons}
            setDisabledAllButtons={setDisabledAllButtons}
            key={element.title}
          />
        )
      })}
    </section>
  )
}

const ImagePick: FC<ImagePickType> = ({
  element,
  setChecked,
  isDisabledAllButtons,
  setDisabledAllButtons,
}) => {
  const [isChecked, setIsChecked] = useState(false)
  const [stepDone, setStepIsDone] = useState(false)
  useEffect(() => {
    isChecked
      ? (() => {
          setDisabledAllButtons(true)
          setTimeout(() => {
            setDisabledAllButtons(false)
          }, config.delays.AnimalGame.presentatitonEnableAllButtons)
        })()
      : setDisabledAllButtons(false)
    setChecked((prev: any) => {
      return stepDone ? (isChecked ? prev + 1 : prev - 1) : 0
    })
    return () => {
      clearTimeout()
    }
  }, [isChecked])
  return (
    <button
      className={classes.animalGame__imageContainer}
      onClick={() => {
        setStepIsDone(true)
        setIsChecked((prev) => !prev)
      }}
      disabled={isDisabledAllButtons}
    >
      <img
        src={element.svg}
        title={element.title}
        alt={element.discription}
        className={`${classes.selectImg} ${
          isChecked ? classes.selectImg_checked : classes.selectImg_unchecked
        }`}
      />
    </button>
  )
}
