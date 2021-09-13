import { addUserInLocalStorage, isUserExists, rememberUser } from "./logIn"

export const loginSubmitEnterEvent = (e: any, name: string, history: any, setCurrentUser: any) => {
    e.preventDefault()
    if (isUserExists(name)) {
        setCurrentUser(name)
        rememberUser(name)
    } else {
        addUserInLocalStorage(name)
        setCurrentUser(name)
    }
    history.push('/')
}

export const toMyMenuEvent = (history: any) => {
    history.push('/')
}