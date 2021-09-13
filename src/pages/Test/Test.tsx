import {useEffect, useState} from 'react'
import classes from './Test.module.css'

export const Test = () => {
  const [initializeTest, setInitializeTest] = useState(false)
  useEffect(() => {
    setInitializeTest(true)
  }, [])
  return (
    <>
      {initializeTest && (
        <div className={classes.wrapper}>
          <div className={classes.side}></div>
          <div className={classes.canvas}>
            <canvas className={classes.canvas__holst}></canvas>
          </div>
        </div>
      )}
    </>
  )
}
