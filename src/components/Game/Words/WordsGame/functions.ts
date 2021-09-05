import {letters} from '../words'
import {images} from '../images'

export function wordChooser(steps: number){
    let result = []
    for (let i = 0; i < steps; i++){
        result[i] = {
            ...letters[i],
            words: [
                ...images[letters[i].english]
            ]
        }
    }
    return result
}