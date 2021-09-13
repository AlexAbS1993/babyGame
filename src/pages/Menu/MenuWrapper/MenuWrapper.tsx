import {FC, useContext} from 'react'
import {useHistory} from 'react-router'
import {Button} from '../../../components/Buttons/Button'
import {config} from '../../../config/config'
import {music} from '../../../music/music'
import {Routes} from '../../../routes/Router'
import {currentMenuStage, MenuWrapperTypes} from './MenuWrapper.types'
import classes from './MenuWrapper.module.css'
import StageContext from '../../../context'
const hierarchy = [
  {
    node: 'root',
    next: [1, 2],
    prev: 0,
  },
  {
    node: 'Начать игру',
    next: null,
    prev: 0,
  },
  {
    node: 'Настройки',
    next: null,
    prev: 0,
  },
]
export const MenuWrapper: FC<MenuWrapperTypes> = ({
  children,
  currentMenuStage,
  setStage,
}) => {
  const {currentUser} = useContext(StageContext)
  return (
    <>
      <MenuButtonWrapper
        currentMenuStage={currentMenuStage}
        setStage={setStage}
      />
      <div className={classes.login}>
        Привет, {currentUser !== 'none' ? currentUser : 'малыш'}
      </div>
      {children}
    </>
  )
}

type MenuButtonWrapper = {
  currentMenuStage: currentMenuStage
  setStage: any
}

const MenuButtonWrapper: FC<MenuButtonWrapper> = ({
  currentMenuStage,
  setStage,
}) => {
  let history = useHistory()
  return (
    <>
      <Button
        disabled={currentMenuStage === 'root' ? true : false}
        events={{
          onClickEvent: () => {
            music.buttonArray()
            let indexOfStage: number = 0
            for (let i = 0; i < hierarchy.length; i++) {
              if (hierarchy[i].node === currentMenuStage) {
                indexOfStage = i
              }
            }
            setStage(hierarchy[hierarchy[indexOfStage].prev].node)
          },
        }}
        type="directionButton"
        subtype="left"
      />
      {config.general.devMode && (
        <button
          onClick={() => {
            history.push(Routes.test)
          }}
        >
          TEST
        </button>
      )}
    </>
  )
}
