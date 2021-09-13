import { config } from './../../config/config';
import { currentStatisticType, statisticSaveDataType } from './statistic.types';
type statisticTypes = "right" | "wrong" | "games"


function saveStatistic(data: statisticSaveDataType) {
    let currentLocal = JSON.parse(localStorage.getItem(config.localStorage.statisticField)!)
    localStorage.setItem(config.localStorage.statisticField, JSON.stringify({
        ...currentLocal, [data.user]: {
            ...data.statistic,
        }
    }))
}

export const addStatistic: (type: statisticTypes) => void = (type) => {
    let currentUser = localStorage.getItem(config.localStorage.foundedField)
    if (!currentUser) {
        return undefined
    }
    let currentStatistic: currentStatisticType = JSON.parse(localStorage.getItem(config.localStorage.statisticField)!)[currentUser]
    let field = new Date().toLocaleString('ru', { year: "numeric", month: "numeric", day: "numeric" })
    if (!currentStatistic[field]) {
        currentStatistic[field] = {
            wrong: 0,
            right: 0,
            games: 0
        }
    }
    switch (type) {
        case "right": {
            currentStatistic[field] = {
                ...currentStatistic[field],
                right: currentStatistic[field].right + 1
            }
            saveStatistic({
                user: currentUser,
                statistic: currentStatistic
            })
            return
        }
        case "wrong": {
            currentStatistic[field] = {
                ...currentStatistic[field],
                wrong: currentStatistic[field].wrong + 1
            }
            saveStatistic({
                user: currentUser,
                statistic: currentStatistic
            })
            return
        }
        case "games": {
            currentStatistic[field] = {
                ...currentStatistic[field],
                games: currentStatistic[field].games + 1
            }
            saveStatistic({
                user: currentUser,
                statistic: currentStatistic
            })
            return
        }
        default: {
            return undefined
        }
    }
}