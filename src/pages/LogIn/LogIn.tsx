import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router'
import {Button} from '../../components/Buttons/Button'
import StageContext from '../../context'
import {
  addUserInLocalStorage,
  isUserExists,
  rememberUser,
} from '../../controllers/Main/logIn'
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
            e.preventDefault()
            if (isUserExists(name)) {
              setCurrentUser(name)
              rememberUser(name)
            } else {
              addUserInLocalStorage(name)
              setCurrentUser(name)
            }
            history.push('/')
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
                history.push('/')
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
              return <> Статистика {currentUser} </>
            }}
          />
        </form>
      </div>
    </section>
  )
}
