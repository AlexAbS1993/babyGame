
enum TouchEventsEnum {
    touchStart = "touchStart",
    touchEnd = "touchEnd",
    nextStep = "nextStep"
}


export const WordsGameTouchEvents = {
    [TouchEventsEnum.touchStart]: (e: TouchEvent, setStartPos: (coords: number) => void) => {
        setStartPos(e.touches[0].clientX)
    },
    [TouchEventsEnum.touchEnd]: (e: TouchEvent, startPos: number, step: number, words: any[], setStep: (coords: any) => any) => {
        if (e.changedTouches[0].clientX < startPos - 150) {
            if (step + 1 === words.length) {
                console.log('end')
            }
            else {
                setStep((prev: number) => prev + 1)
            }
        }
        if (e.changedTouches[0].clientX - 150 > startPos) {
            if (step === 0) {
                return
            }
            else {
                setStep((prev: number) => prev - 1)
            }
        }
    },
    [TouchEventsEnum.nextStep]: (setGameStageEnd: (arg: boolean) => void, setStage: (stage: 'quiz' | 'presentation') => void) => {
        setGameStageEnd(true)
        setTimeout(() => {
            setStage('quiz')
            setGameStageEnd(false)
        }, 1500)
    }
}
