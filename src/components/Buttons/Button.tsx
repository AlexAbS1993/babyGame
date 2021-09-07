import { FC } from "react";
import { ButtonTypes } from "./Button.types";
import classes from './Button.module.css'

export const Button:FC<ButtonTypes<"directionButton"|"menuButton">> = ({events, type, subtype, buttonChangesFunc, text, disabled}) => {
    return (
        <>
        <button 
        disabled={disabled}
        onClick={events.onClickEvent}
        onTouchEnd={events.onTouchEndEvent}
        onTouchStart={events.onTouchStartEvent}
        onTouchMove={events.onTouchMoveEvent}
        className={`${classes.button} ${(() => {
            switch(type){
                case "menuButton": {
                    return classes.button__menu
                }
                case "directionButton": {
                    return `${classes.button__direction} ${classes[subtype]}`
                }
                default: return false
            }
        })()} ${buttonChangesFunc && buttonChangesFunc()}`}
        >
            {
                text && text()
            }
        </button>
        </>
    )
}