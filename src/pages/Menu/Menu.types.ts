export type buttonsMainMenuTypes = {
    option: 'submenu'|"page",
    title: string,
    svg?: any
}

export type MenuTypes = {
    setStage: (str: 'menu'|'game') => void
}