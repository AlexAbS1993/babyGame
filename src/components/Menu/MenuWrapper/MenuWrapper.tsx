import { FC } from 'react'
import classes from './MenuWrapper.module.css'

const hierarchy = [
    'root', 'Начать игру'
]

export const MenuWrapper:FC<any> = ({children, currentMenuStage, setStage}) => {
    return (
        <>
        <button className={classes.button__back} disabled={currentMenuStage === 'root' ? true : false} 
        onClick={() => {
            let indexOfStage = hierarchy.indexOf(currentMenuStage)
            setStage(hierarchy[indexOfStage - 1])
        }}
        ></button>
        {children}
        </>
    )
}