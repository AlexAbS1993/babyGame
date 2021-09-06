import { FC } from "react";

export type ButtonTypes<T extends "menuButton"|"directionButton"> = {
    btnObject: {
        type: T,
        subtype: T extends "directionButton" ? 'left'|'rigth' : T extends "menuButton" ? "simple" : "simple",
        events : {
            onTouchStartEvent?: () => void,
            onTouchEndEvent?: () => void,
            onClickEvent?: () => void,
            onTouchMoveEvent?: () => void
        }
        text?: FC
    }
    
}