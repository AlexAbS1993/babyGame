export type animalListType = {
    title: string,
    cathegory: "animals",
    svg: any,
    discription: string
}

export type PresentationComponentType = {
    setStage: any,
    animalList: animalListType[]
}

export type ImagePickType = {
    element: animalListType,
    setChecked: any,
    isDisabledAllButtons: boolean,
    setDisabledAllButtons: any
}