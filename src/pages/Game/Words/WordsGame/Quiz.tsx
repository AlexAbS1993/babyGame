import { FC, useEffect, useState } from 'react'
import { quizCreator } from './functions'
import classes from './WordsGame.module.css'

export const Quiz:FC<{words: any}> = ({words}) => {
    const [isGreetings, setGreetings] = useState(true)
    const [quizQuestions, setQuizQuestions] = useState<any[]>([])
    const [initialize, setInitialize] = useState(false)
    const [currentRound, setCurrentRound] = useState(0)
    const [isWin, setWin] = useState(false)
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
            isWin && <div className={classes.win}>
                {
                  new Array(12).fill([]).map((e, i) => {
                      return <h2
                      className={classes.ura}
                      key={i}
                      >УРА</h2>
                  })
                }
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
                    return <div key={`${variant.title}${index}`} ><VariantContainer variant={variant} setCurrentRound={setCurrentRound}/> </div>
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
    return (
        <> <img src={variant.svg} alt={variant.title}  onClick={(e) => {
                        if (variant.right){
                            setCurrentRound((prev: any) => {
                                let newStep = prev + 1
                                return newStep
                            })
                        }
                        else {
                            setWrong(true)
                            setTimeout(() => {
                                setWrong(false) 
                            }, 1000)
                        }
                    }}
                    className={`${wrong ? classes.quiz_wrong : classes.quiz_simple}`}/> </>
    )
}