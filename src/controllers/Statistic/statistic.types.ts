export type currentStatisticType = {
    [key: string]: {
        right: number,
        wrong: number,
        games: number
    }
}

export type statisticSaveDataType = {
    user: string,
    statistic: currentStatisticType
}