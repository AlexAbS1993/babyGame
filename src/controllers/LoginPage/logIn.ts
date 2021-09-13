import { config } from '../../config/config';
export const getUserFromLocalStorage = () => {
    let user: string = localStorage.getItem(config.localStorage.foundedField)!
    return user
}

export function isUserInLocalStorage() {
    return localStorage.getItem(config.localStorage.foundedField) ? true : false
}

export function isUserExists(name: string) {
    return JSON.parse(localStorage.getItem(config.localStorage.listOfUsers)!).indexOf(name) === -1 ? false : true
}

export function addUserInLocalStorage(name: string) {
    localStorage.setItem(config.localStorage.listOfUsers, JSON.stringify([...JSON.parse(localStorage.getItem(config.localStorage.listOfUsers)!), name]))
    localStorage.setItem(config.localStorage.statisticField, JSON.stringify({ ...JSON.parse(localStorage.getItem(config.localStorage.statisticField)!), [name]: [] }))
    localStorage.setItem(config.localStorage.foundedField, name)
}

export function rememberUser(name: string) {
    localStorage.setItem(config.localStorage.foundedField, name)
}