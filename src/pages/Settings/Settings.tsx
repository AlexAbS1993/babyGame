import classes from './Settings.module.css'
import {FC, useContext, useEffect, useState} from 'react'
import {config} from '../../config/config'
import {musicSettingsType} from '../../config/config.types'
import {Button} from '../../components/Buttons/Button'
import StageContext from '../../context'
import {useHistory} from 'react-router'

export const Settings: FC = () => {
  const [localConfig, setConfig] = useState<musicSettingsType>(
    {} as musicSettingsType
  )
  const {stage, setStage} = useContext(StageContext)
  const history = useHistory()
  const [initializeCONFIG, setInitializeCONFIG] = useState(false)
  useEffect(() => {
    setConfig(config.getMusicSettings())
    setInitializeCONFIG(true)
  }, [])
  useEffect(() => {
    if (initializeCONFIG) {
      config.setMusicSettngs(localConfig)
    }
  }, [localConfig])
  console.log(config.Settings)
  return (
    <>
      {initializeCONFIG && (
        <section className={classes.settingContainer}>
          <div className={classes.settingsContainer__menuBlock}>
            <div className={classes.settingsContainer__menu}>
              <h2> Игровые настройки </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                }}
              >
                <label htmlFor="volume"> Настроить громкость </label>
                <input
                  value={localConfig.volume}
                  type="range"
                  step="0.1"
                  min="0"
                  max="1"
                  name="volume"
                  id="volume"
                  onChange={(e) => {
                    setConfig({
                      ...localConfig,
                      [e.target.name]: e.target.value,
                    })
                  }}
                />
                <label htmlFor="muted"> Выключить звук? </label>
                <input
                  type="checkbox"
                  name="muted"
                  id="muted"
                  checked={localConfig.muted}
                  onChange={(e) => {
                    console.log(e.target.name)
                    setConfig({
                      ...localConfig,
                      [e.target.name]: e.target.checked,
                    })
                  }}
                />
              </form>
              <Button
                type="menuButton"
                subtype="simple"
                events={{
                  onClickEvent: (e) => {
                    setStage('menu')
                    history.push('/')
                  },
                }}
                text={() => {
                  return <p> Применить </p>
                }}
                disabled={false}
              />
            </div>
          </div>
        </section>
      )}
    </>
  )
}
