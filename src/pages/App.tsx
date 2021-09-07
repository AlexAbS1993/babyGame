import { useState } from 'react';
import { Route } from 'react-router';
import StageContext from '../context';
import classes from './App.module.css';
import { stageAppType } from './App.types';
import { Author } from './Author/Author';
import { WordsGame } from './Game/Words/WordsGame/WordsGame';
import { Menu } from './Menu/Menu';
import { Response } from './ResponseScreen/Response';

const hierarchy = [
  'root',
  'Начать игру'
]

function App() {
  const [stage, setStage] = useState<stageAppType>('menu')
  
  return (
    <StageContext.Provider value={{stage, setStage}}>
      <Response />
      <div className={classes.appContainer}>
          {
            (() => {
              switch(stage){
                case "menu": {
                  return <nav className={`${classes.appContainer__menu} ${classes.menu}`}>
                    <Route path='/author' component={Author}/>
                    <Route path="/" exact render={() => {
                      return <Menu setStage={setStage}/>
                    }}/>
                        </nav>
                }
                case "game": {
                  return <main className={classes.appContainer__gameScreen}>
                    <Route path='/gameWords' component={WordsGame}/>
                  </main>
                }
                default: return false
              }
            })()
          }
      </div>
      </StageContext.Provider>
  );
}

export default App;
