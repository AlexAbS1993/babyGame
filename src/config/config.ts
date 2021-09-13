import { musicSettingsType } from "./config.types"

export class Config {
    public general
    public animalGame
    public wordGame
    public Settings
    public delays
    public localStorage
    constructor() {
        this.general = {
            devMode: true
        }
        // ==== КОНСТАНТЫ ДЛЯ ИГРЫ В ЖИВОТНЫХ ==== //
        this.animalGame = {
            countOfAnimals: 6,
            __rows: 2,
            rounds: 2,
            __stages: ["presentation", "quiz"]
        }
        // ==== КОНСТАНТЫ ДЛЯ ИГРЫ В БУКВЫ ==== //
        this.wordGame = {
            rounds: 6,
            wordsPortion: 3,
            __wordsCount: 33,
            chooseVariants: 3,
            __stages: ["presentation", "quiz"],
            __wordsCountPresentation: 2,
            __potentialWordsParties: 7 // Должно быть 11
        }
        this.Settings = {
            musicMuted: false,
            volume: 0.1
        }
        this.delays = {
            AnimalGame: {
                presentationEndOfStage: 1100,
                presentatitonEnableAllButtons: 500,
                quizSetWin: 700
            }
        }
        this.localStorage = {
            foundedField: "user",
            statisticField: "statistic",
            listOfUsers: "listOfUsers"
        }
    }
    setInitialSettings() {
        !localStorage.getItem(this.localStorage.listOfUsers) && localStorage.setItem(this.localStorage.listOfUsers, JSON.stringify([]))
        !localStorage.getItem(this.localStorage.foundedField) && localStorage.setItem(this.localStorage.foundedField, JSON.stringify(""))
        !localStorage.getItem(this.localStorage.statisticField) && localStorage.setItem(this.localStorage.statisticField, JSON.stringify({}))
    }
    getMusicSettings() {
        return {
            volume: this.Settings.volume,
            muted: this.Settings.musicMuted
        }
    }
    setMusicSettngs(settings: musicSettingsType) {
        this.Settings.volume = settings.volume
        this.Settings.musicMuted = settings.muted
        return this
    }
}

export const config = new Config()