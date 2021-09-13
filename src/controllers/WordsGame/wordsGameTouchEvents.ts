import { music } from './../../music/music';

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
            }
            else {
                music.swipe()
                setStep((prev: number) => prev + 1)
            }
        }
        if (e.changedTouches[0].clientX - 150 > startPos) {
            if (step === 0) {
                return
            }
            else {
                music.swipe()
                setStep((prev: number) => prev - 1)
            }
        }
    },
    [TouchEventsEnum.nextStep]: (setGameStageEnd: (arg: boolean) => void, setStageIndex: (prev: (prev: number) => number) => void) => {
        setGameStageEnd(true)
        setTimeout(() => {
            setStageIndex((prev: number) => prev + 1)
            setGameStageEnd(false)
        }, 1500)
    }
}

