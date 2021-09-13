export type currentStatisticType = {
    date: string,
    right: number,
    wrong: number,
    games: number
}


export type statisticSaveDataType = {
    user: string,
    statistic: currentStatisticType[]
}