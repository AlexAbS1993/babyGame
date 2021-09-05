import { useEffect, useState } from "react"
import { wordChooser } from "./functions"
import classes from './WordsGame.module.css'

export const Presentation = () => {
    const [words, setWords] = useState<any>([])
    const [initialize, setInitialize] = useState(false)
    const [step, setStep] = useState(0)
    const [startPos, setStartPos] = useState(0)
    useEffect(() => {
        setWords(wordChooser(3))
        setInitialize(true)
    }, [])
    return (
        <>
            {
            initialize && 
            <div className={classes.gameField} 
            onTouchStart={(e) => {
                setStartPos(e.touches[0].clientX)
            }}
            onTouchEnd={(e) => {
                if (e.changedTouches[0].clientX < startPos - 150){
                    if (step + 1 === words.length){
                        console.log('end')
                    }
                    else {
                        setStep(prev => prev + 1)
                    }
                }
                if (e.changedTouches[0].clientX - 150 > startPos){
                    if (step === 0){
                        return
                    }
                    else {
                        setStep(prev => prev - 1)
                    }
                }
            }}

            >
            <section className={classes.gameField__letter}>
            <h1>{words[step].big}</h1>
            </section>
            <section className={classes.gameField__images}>
                {
                    words[step].words.map((word: any) => {
                        return <div key={word.title} className={classes.gameField__container}>
                            <ImageAndDiscription word={word}/>  </div>
                    })
                }
            </section>
        </div>
        }
        </>
    )
}


const ImageAndDiscription = ({word}: any) => {
    const [isActive, setActive]= useState(false)
    return (
        <>
    <img 
    src={word.svg} 
    title={word.title} 
    onClick={(e) => {
    setActive(prev => !prev)
                            }}
                            />
    <div className={`${classes.img__discription} ${isActive ? classes.img__discription_active : classes.img__discription_disabled}`}>
        {word.discription}
    </div>
        </>
    )
    
}