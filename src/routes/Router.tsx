import {Author} from '../pages/Author/Author'
import {AnimalGame} from '../pages/Game/Animals/AnimalGame'
import {WordsGame} from '../pages/Game/Words/WordsGame/WordsGame'
import {Menu} from '../pages/Menu/Menu'
import {Test} from '../pages/Test/Test'

type RouteType = {
  path: string
  exact: boolean
  component: React.FC
}

export enum Routes {
  wordGame = '/gameWords',
  start = '/',
  author = '/author',
  test = '/test_dev',
  animalGame = '/gameAnimal',
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
    path: Routes.author,
    exact: true,
    component: Author,
  },
  {
    path: Routes.test,
    exact: true,
    component: Test,
  },
]
