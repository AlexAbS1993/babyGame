import { FC, useContext, useEffect, useState } from 'react'
import { quizCreator } from './functions'
import classes from './WordsGame.module.css'
import StageContext from '../../../../context'
import { useHistory } from 'react-router'

export const Quiz:FC<{words: any}> = ({words}) => {
    const [isGreetings, setGreetings] = useState(true)
    const [quizQuestions, setQuizQuestions] = useState<any[]>([])
    const [initialize, setInitialize] = useState(false)
    const [currentRound, setCurrentRound] = useState(0)
    const [isWin, setWin] = useState(false)
    const {stage, setStage} = useContext(StageContext)
    const history = useHistory()
    useEffect(() => {
        setQuizQuestions(quizCreator(words))
        setInitialize(true)
    }, [])
    useEffect(()=>{
        if (initialize && currentRound === quizQuestions.length){
            setWin(true)
        }
    }, [currentRound])
    return (
        <>
        {
            isWin && <div className={classes.win} 
            onClick={() => {
                setStage("menu")
                history.push('/')
            }}
            >
                <h1>УРА!!!</h1>
            </div>
        }
    {
        initialize && !isWin && currentRound < quizQuestions.length && <section className={classes.qiuz}>
        <div className={classes.qiuz__letter}> 
        <div className={`${classes.quiz__greetings} ${isGreetings ? classes.quiz__greetings_active : classes.quiz__greetings_gone}`}>
            <h1 
            onClick={(e) => {
                setGreetings(false)
            }}
            >Проверь себя, малыш!</h1>
        </div>
            {
                quizQuestions[currentRound].letter
            }
        </div>
        <div className={classes.quiz__variants}>
            {
                quizQuestions[currentRound].variants.map((variant: any, index: number) => {
                    return <div key={`${variant.title}${index}`} className={classes.variant}><VariantContainer variant={variant} setCurrentRound={setCurrentRound}/> </div>
                })
            }
        </div>
    </section>
    }
        
       </>
    )
}

const VariantContainer:FC<{
    variant: any, setCurrentRound: any
}> = ({variant, setCurrentRound}) => {
    const [wrong, setWrong] = useState(false)
    const [congratulation, setCongratulation] = useState(false)
    let timeout: NodeJS.Timeout
    let anothertimeout: NodeJS.Timeout
    useEffect(() => {
        return () => {
            clearTimeout() 
        }
    }, [])
    return (
        <> <img src={variant.svg} alt={variant.title}  onClick={(e) => {
                        if (variant.right){
                            setCongratulation(true)
                            setTimeout(() => {
                                setCongratulation(false)
                            }, 1000)
                            setTimeout(() => {
                                setCurrentRound((prev: any) => {
                                    let newStep = prev + 1
                                    return newStep
                                })
                            }, 1500)
                        }
                        else {
                            setWrong(true)
                            setTimeout(() => {
                                setWrong(false)
                            }, 1000)
                        }
                    }}
                    className={`${wrong ? classes.quiz_wrong : classes.quiz_simple} ${congratulation ? classes.quiz_cong : classes.quiz_nocong}`} /> 
                    </>
    )
}
