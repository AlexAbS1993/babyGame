import {Author} from '../pages/Author/Author'
import {WordsGame} from '../pages/Game/Words/WordsGame/WordsGame'
import {Menu} from '../pages/Menu/Menu'

type RouteType = {
  path: string
  exact: boolean
  component: React.FC
}

export const GameRoutes: RouteType[] = [
  {
    path: '/gameWords',
    exact: true,
    component: WordsGame,
  },
]

export const MenuRoutes: RouteType[] = [
  {
    path: '/',
    exact: true,
    component: Menu,
  },
  {
    path: '/author',
    exact: true,
    component: Author,
  },
]
