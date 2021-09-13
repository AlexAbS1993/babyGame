import {LogIn} from '../pages/LogIn/LogIn'
import {AnimalGame} from '../pages/Game/Animals/AnimalGame'
import {WordsGame} from '../pages/Game/Words/WordsGame'
import {Menu} from '../pages/Menu/Menu'
import {Settings} from '../pages/Settings/Settings'
import {Test} from '../pages/Test/Test'
import {Statistic} from '../pages/Statistic/Statistic'

type RouteType = {
  path: string
  exact: boolean
  component: React.FC<any>
}

export enum Routes {
  wordGame = '/gameWords',
  start = '/',
  login = '/login',
  test = '/test_dev',
  animalGame = '/gameAnimal',
  setting = '/settings',
  statistic = '/statistic',
}

export const GameRoutes: RouteType[] = [
  {
    path: Routes.wordGame,
    exact: true,
    component: WordsGame,
  },
  {
    component: AnimalGame,
    path: Routes.animalGame,
    exact: true,
  },
]

export const MenuRoutes: RouteType[] = [
  {
    path: Routes.start,
    exact: true,
    component: Menu,
  },
  {
    path: Routes.login,
    exact: true,
    component: LogIn,
  },
  {
    path: Routes.test,
    exact: true,
    component: Test,
  },
  {
    path: Routes.setting,
    exact: true,
    component: Settings,
  },
  {
    path: Routes.statistic,
    exact: true,
    component: Statistic,
  },
]
