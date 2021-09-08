import { config } from './../config/config';
const ura = require('../assets/sounds/ura.mp3')
const wrongSound = require('../assets/sounds/wrong.mp3')
const rightSound = require('../assets/sounds/right.mp3')
const buttonClick = require('../assets/sounds/buttonClick.mp3')

enum Music {
    ButtonClick = "buttonClick",
    QuizWin = "quizWin",
    WrongAnswer = "wrongAnswer",
    RightAnswer = "rightAnswer"
}

class AppAudio {
    constructor(public music: any) {
        this.music = new Audio(music)
    }
    setVolume() {
        this.music.volume = config.Settings.musicMuted ? 0 : config.Settings.volume
        return this
    }
    play() {
        this.music.play()
    }
}

export const music = {
    [Music.ButtonClick]: () => {
        new AppAudio(buttonClick.default).setVolume().play()
    },
    [Music.QuizWin]: () => {
        new AppAudio(ura.default).setVolume().play()
    },
    [Music.WrongAnswer]: () => {
        new AppAudio(wrongSound.default).setVolume().play()
    },
    [Music.RightAnswer]: () => {
        new AppAudio(rightSound.default).setVolume().play()
    }
}