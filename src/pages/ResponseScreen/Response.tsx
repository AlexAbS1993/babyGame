import React from 'react'
import classes from './Response.module.css'

export const Response = () => {
    return (
        <div className={classes.response}>
            <h1 className={classes.rotate}> Переверните пожалуйста экран и перегрузите страницу, спасибо!</h1>
            <h1 className={classes.mobile}> Пожалуйста, используйте только мобильные устройства </h1>
        </div>
    )
}