import { config } from '../../../../config/config';
import {letters} from '../words'
import {images} from '../images'

export function wordChooser(steps: number, startPart: number){
    let result = []
    let index = 0
    for (let i = steps*startPart; i < steps + (steps*startPart); i++){
        result[index] = {
            ...letters[i],
            words: [
                ...images[letters[i].english]
            ]
        }
        index++
    }
    return result
}

type quizObject = {
    letter: string,
    variants: {
        svg: any,
        title: string,
        right: boolean
    }[]
}

function shuffle(array:any[]) {
    array.sort(() => Math.random() - 0.5);
  }

export function quizCreator(wordsCollection: any):quizObject[] {
    let quizArray:quizObject[] = []
    let currentRound = 0
    let currentLetterIndex = 0
    let currentWordIndex = 0
    while (currentRound < config.wordGame.rounds){
        quizArray[currentRound] = {
            letter: wordsCollection[currentLetterIndex].big,
            variants: [
            ]
        }
        for (let i = 0; i < config.wordGame.chooseVariants; i++){
            let randomOrNotCurrentWordIndex = currentLetterIndex === i ? currentWordIndex : Math.floor(Math.random() * wordsCollection[i].words.length)
                quizArray[currentRound].variants[i] = {
                    svg: wordsCollection[i].words[randomOrNotCurrentWordIndex].svg,
                    title: wordsCollection[i].words[randomOrNotCurrentWordIndex].title, 
                    right: currentLetterIndex === i ? true : false
                } 
        }
        shuffle(quizArray[currentRound].variants)
        currentRound++
        if (currentWordIndex === 0){
            currentWordIndex++
        }     
        else {
            currentWordIndex = 0
            currentLetterIndex++
        }
    }
    shuffle(quizArray)
    console.log(quizArray)
    return quizArray
}