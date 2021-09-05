import { useState } from "react"
import { Presentation } from "./Presentation"
import classes from './WordsGame.module.css'

export const WordsGame = () => {
    const [stage, setStage] = useState<'presentation'|"quiz">("presentation")
    return (
        <>
        {
            (() => {
                switch (stage){
                    case "presentation": { 
                        return <Presentation />
                    }
                    case "quiz": {
                        return
                    }
                    default: return false
                }
            } 
            )()
        }
        
        </>
    )
}