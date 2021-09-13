import {useContext, useState} from 'react'
import {useHistory} from 'react-router'
import {Button} from '../../components/Buttons/Button'
import StageContext from '../../context'
import {
  loginSubmitEnterEvent,
  toMyMenuEvent,
} from '../../controllers/LoginPage/LoginEvents'
import classes from './LogIn.module.css'

export const LogIn = () => {
  const [name, setName] = useState('')
  const {currentUser, setCurrentUser} = useContext(StageContext)
  const history = useHistory()
  return (
    <section className={classes.login}>
      <div className={classes.login_wrapper}>
        <div className={classes.login_title}>
          <h1>Пожалуйста, войдите</h1>
        </div>
        <form
          onSubmit={(e) => {
            loginSubmitEnterEvent(e, name, history, setCurrentUser)
          }}
          className={`${classes.login_form} ${classes.form}`}
        >
          <label htmlFor="name"> Введите имя </label>
          <input
            placeholder={currentUser}
            autoComplete="off"
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <Button
            disabled={name.length === 0}
            buttonChangesFunc={() => {
              return `${classes.form__button}`
            }}
            events={{}}
            subtype="simple"
            type="menuButton"
            buttonType="submit"
            text={() => {
              return <> Войти! </>
            }}
          />
          <Button
            buttonChangesFunc={() => {
              return `${classes.form__button}`
            }}
            events={{
              onClickEvent: (e) => {
                toMyMenuEvent(history)
              },
            }}
            subtype="simple"
            type="menuButton"
            buttonType="button"
            text={() => {
              return <> Вернуться в меню </>
            }}
          />
          <Button
            disabled={currentUser === 'none'}
            buttonChangesFunc={() => {
              return `${classes.form__button}`
            }}
            events={{
              onClickEvent: (e) => {
                history.push('/statistic')
              },
            }}
            subtype="simple"
            type="menuButton"
            buttonType="button"
            text={() => {
              return (
                <>
                  {' '}
                  Статистика{' '}
                  {currentUser === 'none' ? 'недоступна' : currentUser}
                </>
              )
            }}
          />
        </form>
      </div>
    </section>
  )
}
