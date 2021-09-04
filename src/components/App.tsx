import { useState } from 'react';
import { Route } from 'react-router';
import classes from './App.module.css';
import { Author } from './Author/Author';
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
                  return <div className={`${classes.container__menu} ${classes.menu}`}>
                    <Route path='/author' component={Author}/>
                    <Route path="/" exact render={() => {
                      return <Menu />
                    }}/>
                        </div>
                }
                case "game": {
                  return <></>
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
