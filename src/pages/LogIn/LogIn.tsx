import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router'
import StageContext from '../../context'
import {
  addUserInLocalStorage,
  isUserExists,
  rememberUser,
} from '../../controllers/Main/logIn'

export const LogIn = () => {
  const [name, setName] = useState('')
  const {currentUser, setCurrentUser} = useContext(StageContext)
  const history = useHistory()
  return (
    <>
      <h1>Пожалуйста, войдите</h1>
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
      >
        <label htmlFor="name"> Введите имя </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button type="submit"> Войти! </button>
      </form>
    </>
  )
}
