import { useEffect, useState } from "react"
import { config } from "../../../../config/config"
import { wordChooser } from "./functions"
import { Presentation } from "./Presentation"
import { Quiz } from "./Quiz"

export const WordsGame = () => {
    const [stage, setStage] = useState<'presentation'|"quiz">("presentation")
    const [words, setWords] = useState<any>([])
    const [initialize, setInitialize] = useState(false)
    useEffect(() => {
        let startPart = Math.floor(2*Math.random())
        setWords(wordChooser(config.wordGame.wordsPortion, startPart))
        setInitialize(true)
    }, [])
    return (
        <>
        {
            initialize && <>
            { 
                (() => {
                    switch (stage){
                        case "presentation": { 
                            return <Presentation words={words} setStage={setStage}/>
                        }
                        case "quiz": {
                            return <Quiz words={words}/>
                        }
                        default: return false
                    }
                } 
                )()
            }
            </>
        }        
        </>
    )
}