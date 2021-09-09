import {FC, LegacyRef, useEffect, useRef, useState} from 'react'
import {config} from '../../../../config/config'
import {shuffle} from '../../Words/WordsGame/functions'
import {animalListType} from '../Presentation/Presentation.types'
import {QuizAnimalGameTypes} from './Quiz.types'
import classes from './QuizAnimal.module.css'

export const QuizAnimalGame: FC<QuizAnimalGameTypes> = ({animalList}) => {
  const [getCurrentStep, setCurrentStep] = useState(0)
  const [initialize, setInitialize] = useState(false)
  const [getAnimalSortedSeparatedList, setAnimalSortedSeparatedList] = useState<
    any[]
  >([])
  const [goalCoords, setGoalCoords] = useState<any>({})
  console.log(goalCoords)
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
                    key={`${element.title}${element.cathegory}`}
                  />
                )
              }
            )}
          </section>
          <section className={classes.touchGamingScreen__known}>
            {getAnimalSortedSeparatedList[getCurrentStep].known.map(
              (element: animalListType, index: number) => {
                return (
                  <DraggableContainer
                    goalCoords={goalCoords}
                    element={element}
                    index={index}
                    key={element.title}
                  />
                )
              }
            )}
          </section>
        </section>
      )}
    </>
  )
}

type DropZoneTypes = {
  element: animalListType
  setGoalCoords: any
}
const DropZone: FC<DropZoneTypes> = ({element, setGoalCoords}) => {
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
}

const DraggableContainer: FC<draggableContainerType> = ({
  element,
  index,
  goalCoords,
}) => {
  const [isTouchStart, setIsTouchStart] = useState(false)
  const [coords, setCoords] = useState()
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref) {
      let datas = ref.current!.getBoundingClientRect()
      let left = datas.left
      let top = datas.top
      let height = datas.height
      let width = datas.width
      ref.current!.addEventListener('touchstart', function () {
        this.addEventListener('touchmove', (event) => {
          this.style.top = event.targetTouches[0].clientY - height / 2 + 'px'
          this.style.left = event.targetTouches[0].clientX - width / 2 + 'px'
        })
        this.addEventListener('touchend', function (event) {
          this.style.top = top + 'px'
          this.style.left = left + 'px'
          console.log(event.changedTouches[0])
        })
      })
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
