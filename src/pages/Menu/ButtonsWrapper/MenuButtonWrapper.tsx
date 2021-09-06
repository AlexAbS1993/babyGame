import { FC } from "react"
import { useHistory } from "react-router"
import { Button } from "../../../components/Buttons/Button"
import { ButtonWrapperType } from "./ButtonWrapper.types"
import classes from '../Menu.module.css'
import styles from '../../../components/Buttons/Button.module.css'

export const MenuButtonWrapper:FC<ButtonWrapperType> = ({
    buttonsStage, setButtonsStage,  buttonElement, index, setSubMenu, setStage
}) => {
    const history = useHistory()
    return <Button 
        text = {() => {
            return <h3>{ buttonElement.svg &&
                <img className={classes.menu__icon} 
                src={buttonElement.svg}/>}
                {buttonElement.title}</h3>
        }} 

        type='menuButton'
        subtype ='simple'
        buttonChangesFunc = {
            () => {
                return `${buttonsStage[index].touchStart ? `${styles.button__menu_touched}` : `${styles.button__menu_untouched}`}`
             }
        }
        events = { 
            {
                onClickEvent: (e) => {
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
                },
                onTouchEndEvent: (e) => {
                    let newState = [...buttonsStage]
                    newState[index].touchStart = false
                    setButtonsStage(newState)
                },
                onTouchStartEvent: (e) => {
                    let newState = [...buttonsStage]
                    newState[index].touchStart = true
                    setButtonsStage(newState)
                }
            }
        }
    />
}