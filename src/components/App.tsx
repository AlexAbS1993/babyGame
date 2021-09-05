import { useState } from 'react';
import { Route } from 'react-router';
import classes from './App.module.css';
import { Author } from './Author/Author';
import { WordsGame } from './Game/Words/WordsGame/WordsGame';
import { Menu } from './Menu/Menu';
import { Response } from './ResponseScreen/Response';

const hierarchy = [
  'root',
  'Начать игру'
]

function App() {
  const [stage, setStage] = useState<'menu'|'game'>('menu')
  return (
    <>
      <Response />
      <div className={classes.container}>
          {
            (() => {
              switch(stage){
                case "menu": {
                  return <nav className={`${classes.container__menu} ${classes.menu}`}>
                    <Route path='/author' component={Author}/>
                    <Route path="/" exact render={() => {
                      return <Menu setStage={setStage}/>
                    }}/>
                        </nav>
                }
                case "game": {
                  return <main className={classes.container__gameScreen}>
                    <Route path='/gameWords' component={WordsGame}/>
                  </main>
                }
                default: return false
              }
            })()
          }
      </div>
    </>
  );
}

export default App;
