import {useContext, useEffect, useState} from 'react'
import {WinScreen} from '../../../components/Modals/WinScreen'
import {config} from '../../../config/config'
import StageContext from '../../../context'
import {wordChooser} from './functions'
import {Presentation} from './Presentation'
import {Quiz} from './Quiz'

export const WordsGame = () => {
  const [stageIndex, setStageIndex] = useState(0)
  const [isWin, setIsWin] = useState(false)
  console.log(isWin)
  const [words, setWords] = useState<any>([])
  const {stage, setStage} = useContext(StageContext)
  const [initialize, setInitialize] = useState(false)
  useEffect(() => {
    let startPart = Math.floor(
      config.wordGame.__potentialWordsParties * Math.random()
    )
    setWords(wordChooser(config.wordGame.wordsPortion, startPart))
    setInitialize(true)
  }, [])
  useEffect(() => {
    if (stageIndex === config.wordGame.__stages.length) {
      setIsWin(true)
    }
  }, [stageIndex])
  return (
    <>
      {initialize && !isWin && (
        <>
          {(() => {
            switch (config.wordGame.__stages[stageIndex]) {
              case 'presentation': {
                return (
                  <Presentation words={words} setStageIndex={setStageIndex} />
                )
              }
              case 'quiz': {
                return <Quiz words={words} setStageIndex={setStageIndex} />
              }
              default:
                return false
            }
          })()}
        </>
      )}
      {isWin && (
        <>
          <WinScreen setStage={setStage} path="/" requiredStage="menu" />
        </>
      )}
    </>
  )
}
