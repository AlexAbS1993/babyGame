import { FC } from 'react'
import { Button } from '../../../components/Buttons/Button'
import { currentMenuStage, MenuWrapperTypes } from './MenuWrapper.types'
const hierarchy = [
    {
        node: "root",
        next: [1, 2],
        prev: 0
    },
    {
        node: "Начать игру",
        next: null,
        prev: 0
    },
    {
        node: "Настройки",
        next: null,
        prev: 0
    }
]
export const MenuWrapper:FC<MenuWrapperTypes> = ({children, currentMenuStage, setStage}) => {
    return (
        <>
        <MenuButtonWrapper 
        currentMenuStage={currentMenuStage}
        setStage={setStage}
        />
        {children}
        </>
    )
}

type MenuButtonWrapper = {
    currentMenuStage: currentMenuStage,
    setStage: any
}

const MenuButtonWrapper:FC<MenuButtonWrapper> = ({currentMenuStage, setStage}) => {
    return (
        <Button 
        disabled={currentMenuStage === 'root' ? true : false}
        events={{
            onClickEvent: () => {
                let indexOfStage:number = 0
                for (let i = 0; i < hierarchy.length; i++){
                    if (hierarchy[i].node === currentMenuStage){
                        indexOfStage = i
                    }
                }
                setStage(hierarchy[hierarchy[indexOfStage].prev].node)
            }
        }}
        type="directionButton"
        subtype="left"
        />
    )
}