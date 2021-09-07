import { FC, ReactFragment } from "react";

export type ButtonTypes<T extends "menuButton"|"directionButton"> = {
        type: T,
        subtype: T extends "directionButton" ? 'left'|'rigth' : T extends "menuButton" ? "simple" : "simple",
        buttonChangesFunc?: () => any
        events : {
            onTouchStartEvent?: (e: any) => void,
            onTouchEndEvent?: (e: any) => void,
            onClickEvent?: (e: any) => void,
            onTouchMoveEvent?: (e: any) => void
        }
        text?: () => ReactFragment,
        disabled?: boolean
}