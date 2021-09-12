import React from 'react'
import {FC, LegacyRef, useEffect, useRef, useState} from 'react'
import {config} from '../../../../config/config'
import {shuffle} from '../../Words/functions'
import {winCondition} from '../functions/dragAndDropGoalCondition'
import {animalListType} from '../Presentation/Presentation.types'
import {QuizAnimalGameTypes} from './Quiz.types'
import classes from './QuizAnimal.module.css'

export const QuizAnimalGame: FC<QuizAnimalGameTypes> = ({
  animalList,
  setStageIndex,
}) => {
  const [getCurrentStep, setCurrentStep] = useState(0)
  const [initialize, setInitialize] = useState(false)
  const [getAnimalSortedSeparatedList, setAnimalSortedSeparatedList] = useState<
    any[]
  >([])
  const [goalCoords, setGoalCoords] = useState<any>({})
  const [dropZoneReady, setDropReady] = useState(false)
  const [dropZoneCountReady, setCountDropZone] = useState<number>(0)
  const [getGoalsReached, setGoalsReached] = useState(0)
  useEffect(() => {
    if (
      dropZoneCountReady ===
      config.animalGame.countOfAnimals / config.animalGame.rounds
    ) {
      setDropReady(true)
    }
  }, [goalCoords])
  useEffect(() => {
    if (
      getGoalsReached ===
      config.animalGame.countOfAnimals / config.animalGame.rounds
    ) {
      if (getCurrentStep === config.animalGame.rounds - 1) {
        setTimeout(() => {
          setStageIndex((prev: any) => prev + 1)
        }, config.delays.AnimalGame.quizSetWin)
      } else {
        setGoalsReached(0)
        setCountDropZone(0)
        setDropReady(false)
        setCurrentStep((prev: any) => prev + 1)
      }
    }
  }, [getGoalsReached])
  useEffect(() => {
    let separatedAnimalList = []
    let index = -1
    let indexesArray = new Array(config.animalGame.countOfAnimals)
      .fill(0)
      .map(() => index++ + 1)
    shuffle(indexesArray)
    for (let i = 0; i < indexesArray.length; i++) {
      separatedAnimalList[i] = animalList[indexesArray[i]]
    }
    setAnimalSortedSeparatedList([
      {
        unknown: [
          ...separatedAnimalList.slice(0, config.animalGame.countOfAnimals / 2),
        ],
        known: [
          ...shuffle(
            separatedAnimalList.slice(0, config.animalGame.countOfAnimals / 2)
          ),
        ],
      },
      {
        unknown: [
          ...separatedAnimalList.slice(config.animalGame.countOfAnimals / 2),
        ],
        known: [
          ...shuffle(
            separatedAnimalList.slice(config.animalGame.countOfAnimals / 2)
          ),
        ],
      },
    ])
    setInitialize(true)
  }, [])

  return (
    <>
      {initialize && (
        <section className={classes.touchGamingScreen}>
          <section className={classes.touchGamingScreen__fieldUnknown}>
            {getAnimalSortedSeparatedList[getCurrentStep].unknown.map(
              (element: animalListType) => {
                return (
                  <DropZone
                    element={element}
                    setGoalCoords={setGoalCoords}
                    setCountDropZone={setCountDropZone}
                    key={`${element.title}${element.cathegory}`}
                  />
                )
              }
            )}
          </section>
          {dropZoneReady && (
            <section className={classes.touchGamingScreen__known}>
              {getAnimalSortedSeparatedList[getCurrentStep].known.map(
                (element: animalListType, index: number) => {
                  return (
                    <DraggableContainer
                      goalCoords={goalCoords}
                      element={element}
                      index={index}
                      setGoalsReached={setGoalsReached}
                      key={element.title}
                    />
                  )
                }
              )}
            </section>
          )}
        </section>
      )}
    </>
  )
}

type DropZoneTypes = {
  element: animalListType
  setGoalCoords: any
  setCountDropZone: any
}
const DropZone: FC<DropZoneTypes> = ({
  element,
  setGoalCoords,
  setCountDropZone,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    let coords = ref.current?.getBoundingClientRect()
    setGoalCoords((prev: any) => {
      return {
        ...prev,
        [element.title]: {
          left: coords?.left,
          right: coords?.right,
          top: coords?.top,
          bottom: coords?.bottom,
        },
      }
    })
    setCountDropZone((prev: any) => {
      let newCount = prev + 1
      return newCount
    })
  }, [])
  return (
    <div
      className={classes.container__imageContainer_forUnknown}
      key={element.title}
      ref={ref}
    >
      <img src={element.svg} className={classes.container__img_unknown} />
    </div>
  )
}

type draggableContainerType = {
  element: animalListType
  index: number
  goalCoords: {
    [key: string]: {
      left: number
      top: number
      bottom: number
      right: number
    }
  }
  setGoalsReached: any
}

const DraggableContainer: FC<draggableContainerType> = React.memo(
  ({element, index, goalCoords, setGoalsReached}) => {
    const [sizes, setSizes] = useState({
      width: 0,
      height: 0,
    })
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
      if (ref) {
        let datas = ref.current!.getBoundingClientRect()
        let left = datas.left
        let top = datas.top
        let height = datas.height
        let width = datas.width
        const touchMove = (event: TouchEvent) => {
          event.preventDefault()
          ref.current!.style.top =
            event.targetTouches[0].clientY - height / 2 + 'px'
          ref.current!.style.left =
            event.targetTouches[0].clientX - width / 2 + 'px'
        }
        setSizes({
          width: width,
          height: height,
        })
        const touchEnd = (event: TouchEvent) => {
          event.preventDefault()
          if (
            winCondition(
              {
                left: event.changedTouches[0].clientX,
                top: event.changedTouches[0].clientY,
                height: sizes.height,
                width: sizes.width,
              },
              {
                left: goalCoords[element.title].left,
                right: goalCoords[element.title].right,
                top: goalCoords[element.title].top,
                bottom: goalCoords[element.title].bottom,
              }
            )
          ) {
            ref.current!.removeEventListener('touchmove', touchMove)
            ref.current!.removeEventListener('touchend', touchEnd)
            ref.current!.style.top = goalCoords[element.title].top + 'px'
            ref.current!.style.left = goalCoords[element.title].left + 'px'
            setGoalsReached((prev: any) => prev + 1)
          } else {
            ref.current!.style.top = top + 'px'
            ref.current!.style.left = left + 'px'
          }
        }
        ref.current!.addEventListener('touchmove', touchMove)
        ref.current!.addEventListener('touchend', touchEnd)
      }
    }, [])
    return (
      <>
        <div
          ref={ref}
          className={classes.container__imageContainer}
          key={element.title}
          id={`${index}`}
        >
          <img src={element.svg} className={classes.container__img_known} />
        </div>
      </>
    )
  }
)
