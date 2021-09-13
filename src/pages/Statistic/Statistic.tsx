import {useContext} from 'react'
import StageContext from '../../context'

export const Statistic = () => {
  const {currentUser} = useContext(StageContext)
  return <>Statistic of {currentUser}</>
}
