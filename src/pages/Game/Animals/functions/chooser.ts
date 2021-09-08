import { config } from './../../../../config/config';
import { letters } from "../../Words/datas/words"
import { images } from "../../Words/datas/images"
import { shuffle } from "../../Words/WordsGame/functions"

export const animalChooser = () => {
    let animalList: any = []
    for (let i = 0; i < letters.length; i++) {
        images[letters[i].english].forEach((element) => {
            if (element.cathegory === "animals") {
                animalList.push(element)
            }
        })
    }
    return animalList
}

export const animalPicker = (animalList: any) => {
    shuffle(animalList)
    return animalList.slice(0, config.animalGame.countOfAnimals)
}