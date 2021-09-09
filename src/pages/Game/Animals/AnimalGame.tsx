import {useEffect, useState} from 'react'
import {animalChooser, animalPicker} from './functions/chooser'
import {PresentationAnimalGame} from './Presentation/Presentation'
import {animalListType} from './Presentation/Presentation.types'
import {QuizAnimalGame} from './Quiz/QuizAnimalGame'

export const AnimalGame = () => {
  const [isInitialize, setInitialize] = useState(false)
  const [getAnimalList, setAnimalList] = useState<animalListType[]>([])
  const [getStage, setStage] = useState<'presentation' | 'quiz'>('presentation')
  useEffect(() => {
    setAnimalList(animalPicker(animalChooser()))
  }, [])
  return (
    <>
      {(() => {
        switch (getStage) {
          case 'presentation': {
            return (
              <PresentationAnimalGame
                setStage={setStage}
                animalList={getAnimalList}
              />
            )
          }
          case 'quiz': {
            return <QuizAnimalGame animalList={getAnimalList} />
          }
          default:
            ;<> </>
        }
      })()}
    </>
  )
}
