import {letters} from '../words'
import {images} from '../images'
import {startPart} from './config'

export function wordChooser(steps: number){
    let result = []
    for (let i = steps*startPart; i < steps + (steps*startPart); i++){
        result[i] = {
            ...letters[i],
            words: [
                ...images[letters[i].english]
            ]
        }
    }
    return result
}