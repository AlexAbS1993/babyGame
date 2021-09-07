import {FC, useContext, useEffect, useState} from 'react'
import classes from './Menu.module.css'
import {buttonsMainMenuTypes} from './Menu.types'
import {MenuWrapper} from './MenuWrapper/MenuWrapper'
import paw from '../../assets/menuIcons/paw.svg'
import poet from '../../assets/menuIcons/poet.svg'
import settings from '../../assets/menuIcons/settings.svg'
import V from '../../assets/menuIcons/V.svg'
import cat from '../../assets/menuIcons/cat.svg'
import {MenuButtonWrapper} from './ButtonsWrapper/MenuButtonWrapper'
import {currentMenuStage} from './MenuWrapper/MenuWrapper.types'
import StageContext from '../../context'

const buttons: buttonsMainMenuTypes[] = [
  {
    title: 'Начать игру',
    option: 'submenu',
    svg: paw,
  },
  {
    title: 'Настройки',
    option: 'submenu',
    svg: settings,
  },
  {
    title: 'Автор',
    option: 'page',
    svg: poet,
  },
]

const newGameButtons: buttonsMainMenuTypes[] = [
  {
    title: 'Животные',
    option: 'page',
    svg: cat,
  },
  {
    title: 'Буквы и слова',
    option: 'page',
    svg: V,
  },
]

export const Menu: FC = () => {
  const {stage, setStage} = useContext(StageContext)
  const [buttonsStage, setButtonsStage] = useState<{touchStart: boolean}[]>([])
  const [subMenu, setSubMenu] = useState<currentMenuStage>('root')
  const [initialize, setInitialize] = useState(false)
  // ==== СОЗДАНИЕ ОБЪЕКТА СОСТОЯНИЯ КНОПОК ==== //
  useEffect(() => {
    let buttonsStageInitial: {touchStart: boolean}[] = []
    buttons.forEach((but, index) => {
      buttonsStageInitial[index] = {
        touchStart: false,
      }
    })
    setButtonsStage(buttonsStageInitial)
    setInitialize(true)
  }, [])
  return (
    <>
      {initialize && (
        <MenuWrapper currentMenuStage={subMenu} setStage={setSubMenu}>
          <div className={classes.menu__wrapper}>
            {(() => {
              switch (subMenu) {
                case 'root': {
                  return buttons
                }
                case 'Начать игру': {
                  return newGameButtons
                }
                default: {
                  return []
                }
              }
            })().map((buttonElement, index) => {
              return (
                <MenuButtonWrapper
                  buttonsStage={buttonsStage}
                  setButtonsStage={setButtonsStage}
                  buttonElement={buttonElement}
                  index={index}
                  setSubMenu={setSubMenu}
                  setStage={setStage}
                  key={buttonElement.title}
                />
              )
            })}
          </div>
        </MenuWrapper>
      )}
    </>
  )
}
