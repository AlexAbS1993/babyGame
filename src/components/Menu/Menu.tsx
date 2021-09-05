import { FC, useEffect, useState } from 'react'
import classes from './Menu.module.css'
import { buttonsMainMenuTypes } from './Menu.types'
import { useHistory } from "react-router-dom"
import { MenuWrapper } from './MenuWrapper/MenuWrapper'
import paw from '../../assets/menuIcons/paw.svg'
import poet from '../../assets/menuIcons/poet.svg'
import settings from '../../assets/menuIcons/settings.svg'
import V from '../../assets/menuIcons/V.svg'
import cat from '../../assets/menuIcons/cat.svg'

const buttons: buttonsMainMenuTypes[] = [
    {
        title: "Начать игру",
        option: 'submenu',
        svg: paw
    },
    {
        title: "Настройки",
        option: 'submenu',
        svg: settings
    },
    {
        title: "Автор",
        option: 'page',
        svg: poet
    }
]

const newGameButtons: buttonsMainMenuTypes[] = [
    {
        title: "Животные",
        option: 'page',
        svg: cat
    },
    {
        title: "Буквы и слова",
        option: 'page',
        svg: V
    }
]

type MenuTypes = {
    setStage: (str: 'menu'|'game') => void
}

export const Menu:FC<MenuTypes> = ({setStage}) => {
    const [buttonsStage, setButtonsStage] = useState<{touchStart: boolean}[]>([])
    const [subMenu, setSubMenu] = useState<string>('root')
    const [initialize, setInitialize] = useState(false)
    const history = useHistory()
    // ==== СОЗДАНИЕ ОБЪЕКТА СОСТОЯНИЯ КНОПОК ==== //
    useEffect(() => {
        let buttonsStageInitial:{touchStart: boolean}[] = []
        buttons.forEach((but, index) => {
            buttonsStageInitial[index] = {
                touchStart: false
            }
        })
        setButtonsStage(buttonsStageInitial)
        setInitialize(true)
    }, [])
    return (
        <>
        {
            initialize && 
            <MenuWrapper currentMenuStage={subMenu} setStage={setSubMenu}>
                <div className={classes.menu__wrapper}>
                    { 
                                                (() => {
                                                    switch(subMenu){
                                                        case "root": {
                                                            return buttons
                                                        }
                                                        case "Начать игру": {
                                                            return newGameButtons
                                                        }
                                                        default: {
                                                            return []
                                                        }
                                                    }
                                                })().map((buttonElement, index) => {
                                                    
                                                return <button key={buttonElement.title} 
                                                // ==== ОБРАБОТКА КАСАНИЯ ==== //
                                                onTouchStart={(e) => {
                                                    let newState = [...buttonsStage]
                                                    newState[index].touchStart = true
                                                    setButtonsStage(newState)
                                                }}
                                                // ==== ОБРАБОТКА ЗАВЕРШЕНИЯ КАСАНИЯ ==== //
                                                onTouchEnd={(e) => {
                                                    let newState = [...buttonsStage]
                                                    newState[index].touchStart = false
                                                    setButtonsStage(newState)
                                                }}
                                                onClick={(e) => {
                                                    if (buttonElement.option === 'submenu'){
                                                        setSubMenu(buttonElement.title)
                                                    }
                                                    else if (buttonElement.option === 'page'){
                                                        switch(buttonElement.title) {
                                                            case "Автор": {
                                                                history.push("/author")
                                                                return
                                                            }
                                                            case "Настройки": {
                                                                history.push("/settings")
                                                                return
                                                            }
                                                            case "Буквы и слова": {
                                                                setStage('game')
                                                                history.push('/gameWords')
                                                                return
                                                            }
                                                            case "Животные": {
                                                                setStage('game')
                                                                history.push('/gameAnimals')
                                                                return
                                                            }
                                                            default: return false
                                                        }
                                                    }
                                                }}
                                                // ==== СМЕНА КЛАССА В ЗАВИСИМОСТИ ОТ СОСТОЯНИЯ КНОПКИ ==== //
                                                className={`${classes.menu__button} ${buttonsStage[index].touchStart ? classes.touchedButton : classes.simpleButton}`}
                                                ><h3>{ buttonElement.svg &&
                                                    <img className={classes.menu__icon} src={buttonElement.svg}/>}
                                                    {buttonElement.title}</h3></button>
                                                })
                                            
                                    
                    }
                
            </div>
        </MenuWrapper>
        }
        </>    
    )
}