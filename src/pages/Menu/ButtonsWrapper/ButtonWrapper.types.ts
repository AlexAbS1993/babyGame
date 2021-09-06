import { buttonsMainMenuTypes } from "../Menu.types";

export type ButtonWrapperType = {
    buttonsStage: {touchStart: boolean}[],
    setButtonsStage: any,
    buttonElement: buttonsMainMenuTypes,
    index: number,
    setSubMenu: any,
    setStage: any
}