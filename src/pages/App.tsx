import {useState} from 'react'
import {Route, Switch} from 'react-router'
import StageContext from '../context'
import {GameRoutes, MenuRoutes} from '../routes/Router'
import classes from './App.module.css'
import {stageAppType} from './App.types'
import {Response} from './ResponseScreen/Response'

function App() {
  const [stage, setStage] = useState<stageAppType>('menu')
  return (
    <StageContext.Provider value={{stage, setStage}}>
      <Response />
      <div className={classes.appContainer}>
        {(() => {
          switch (stage) {
            case 'menu': {
              return (
                <nav
                  className={`${classes.appContainer__menu} ${classes.menu}`}
                >
                  <Switch>
                    {MenuRoutes.map((route) => {
                      return (
                        <Route
                          path={route.path}
                          exact={route.exact}
                          component={route.component}
                          key={route.path}
                        />
                      )
                    })}
                  </Switch>
                </nav>
              )
            }
            case 'game': {
              return (
                <main className={classes.appContainer__gameScreen}>
                  <Switch>
                    {GameRoutes.map((route) => {
                      return (
                        <Route
                          path={route.path}
                          exact={route.exact}
                          component={route.component}
                          key={route.path}
                        />
                      )
                    })}
                  </Switch>
                </main>
              )
            }
            default:
              return false
          }
        })()}
      </div>
    </StageContext.Provider>
  )
}

export default App
