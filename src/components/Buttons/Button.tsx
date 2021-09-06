import { FC, useEffect, useRef } from "react";
import { ButtonTypes } from "./Button.types";
import classes from './Button.module.css'

export const Button:FC<ButtonTypes<"directionButton"|"menuButton">> = ({btnObject}) => {
    useEffect(() => {

    }, [])
    return (
        <>
        <button 
        onClick={btnObject.events.onClickEvent}
        onTouchEnd={btnObject.events.onTouchEndEvent}
        onTouchStart={btnObject.events.onTouchStartEvent}
        onTouchMove={btnObject.events.onTouchMoveEvent}
        className={`${classes.button} ${(() => {
            switch(btnObject.type){
                case "menuButton": {
                    return classes.button__menu
                }
                case "directionButton": {
                    return `${classes.button__direction} ${classes[btnObject.subtype]}`
                }
                default: return false
            }
        })()}`}
        >


        </button>
        </>
    )
}