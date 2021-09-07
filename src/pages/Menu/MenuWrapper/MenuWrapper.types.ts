export type currentMenuStage = 'root'|"Начать игру"|"Настройки"
export type MenuWrapperTypes = {
    currentMenuStage: currentMenuStage,
    setStage: any
}
export type hierarchyType = {
    node: currentMenuStage,
    next: number[],
    prev: number
}[]