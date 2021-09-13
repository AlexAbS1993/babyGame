import { config } from './../../config/config';
import { currentStatisticType, statisticSaveDataType } from './statistic.types';
type statisticTypes = "right" | "wrong" | "games"


function saveStatistic(data: statisticSaveDataType) {
    let currentLocal = JSON.parse(localStorage.getItem(config.localStorage.statisticField)!)
    localStorage.setItem(config.localStorage.statisticField, JSON.stringify({
        ...currentLocal, [data.user]: [
            ...data.statistic
        ]
        ,
    }))
}

export const addStatistic: (type: statisticTypes) => void = (type) => {
    let currentUser = localStorage.getItem(config.localStorage.foundedField)
    if (!currentUser) {
        return undefined
    }
    let currentStatistic: currentStatisticType[] = JSON.parse(localStorage.getItem(config.localStorage.statisticField)!)[currentUser]
    let newIndex: number = 0
    let lastIndex = currentStatistic.length - 1
    if (lastIndex === -1) {
        currentStatistic.push({
            date: new Date().toLocaleString('ru', { year: "numeric", month: "numeric", day: "numeric" }),
            wrong: 0,
            right: 0,
            games: 0
        })
        newIndex = 0
    }
    else {
        let date = new Date().toLocaleString('ru', { year: "numeric", month: "numeric", day: "numeric" })
        if (currentStatistic[lastIndex].date !== date) {
            currentStatistic[lastIndex + 1] = {
                date,
                wrong: 0,
                right: 0,
                games: 0
            }
            newIndex = lastIndex + 1
        }
        else {
            newIndex = lastIndex
        }
    }
    switch (type) {
        case "right": {
            currentStatistic[newIndex] = {
                ...currentStatistic[newIndex],
                right: currentStatistic[newIndex].right + 1
            }
            saveStatistic({
                user: currentUser,
                statistic: currentStatistic
            })
            return
        }
        case "wrong": {
            currentStatistic[newIndex] = {
                ...currentStatistic[newIndex],
                wrong: currentStatistic[newIndex].wrong + 1
            }
            saveStatistic({
                user: currentUser,
                statistic: currentStatistic
            })
            return
        }
        case "games": {
            currentStatistic[newIndex] = {
                ...currentStatistic[newIndex],
                games: currentStatistic[newIndex].games + 1
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