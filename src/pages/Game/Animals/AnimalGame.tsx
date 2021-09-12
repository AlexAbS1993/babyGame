import {useContext, useEffect, useState} from 'react'
import {WinScreen} from '../../../components/Modals/WinScreen'
import {config} from '../../../config/config'
import StageContext from '../../../context'
import {animalChooser, animalPicker} from './functions/chooser'
import {PresentationAnimalGame} from './Presentation/Presentation'
import {animalListType} from './Presentation/Presentation.types'
import {QuizAnimalGame} from './Quiz/QuizAnimalGame'

export const AnimalGame = () => {
  const [initialize, setInitialize] = useState(false)
  const [getAnimalList, setAnimalList] = useState<animalListType[]>([])
  const [stageIndex, setStageIndex] = useState(0)
  const [isWin, setIsWin] = useState(false)
  const {stage, setStage} = useContext(StageContext)
  useEffect(() => {
    if (stageIndex === config.animalGame.__stages.length) {
      setIsWin(true)
    }
  }, [stageIndex])
  useEffect(() => {
    setAnimalList(animalPicker(animalChooser()))
    setInitialize(true)
  }, [])
  return (
    <>
      {initialize && (
        <>
          {!isWin ? (
            <>
              {(() => {
                switch (config.animalGame.__stages[stageIndex]) {
                  case 'presentation': {
                    return (
                      <PresentationAnimalGame
                        setStageIndex={setStageIndex}
                        animalList={getAnimalList}
                      />
                    )
                  }
                  case 'quiz': {
                    return (
                      <QuizAnimalGame
                        animalList={getAnimalList}
                        setStageIndex={setStageIndex}
                      />
                    )
                  }
                  default:
                    return false
                }
              })()}
            </>
          ) : (
            <>
              <WinScreen path="/" setStage={setStage} requiredStage="menu" />
            </>
          )}
        </>
      )}
    </>
  )
}
