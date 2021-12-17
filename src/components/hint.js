import React from 'react';
import questionMark from '../assets/question.svg';
import s from './css/hint.module.css';
import getJSXfromValutes from '../utilites/getJSXfromValues.js';
import valutes from '../utilites/valutes.json';

const Hint = (props) => {
    return (
        <>
        <img className={s.img} src={questionMark} alt='' onClick={() => props.setShowHint(!props.showHint)}/>
        <div className={props.showHint ? s.divActive : s.div} onClick={() => props.setShowHint(!props.showHint)}>
            {getJSXfromValutes(valutes)}
        </div>
        </>
    )
}

export default Hint;