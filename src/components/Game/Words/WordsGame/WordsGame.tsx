import { useState } from "react"
import { Presentation } from "./Presentation"
import { Quiz } from "./Quiz"

export const WordsGame = () => {
    const [stage, setStage] = useState<'presentation'|"quiz">("presentation")
    return (
        <>
        {
            (() => {
                switch (stage){
                    case "presentation": { 
                        return <Presentation setStage={setStage}/>
                    }
                    case "quiz": {
                        return <Quiz />
                    }
                    default: return false
                }
            } 
            )()
        }
        
        </>
    )
}