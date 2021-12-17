import React from 'react';
import s from './css/courses.module.css';
import img from '../assets/background_4.jpeg';
import HintWrap from './hintWrap.js';

const Courses = (props) => {

    return (
        <>
        <img src={img} className={s.background} alt=''/>
        <form className={s.box}>
            <div className={s.chooseDiv}>
                <div>
                    <select className={s.select}
                        onClick={props.getCurrenciesArrayJSX}
                        onChange={props.selectBaseCurrency}>

                        {props.optionsArray}

                    </select>
                    <button className={s.btnGet} onClick={props.getRates}>Get rates!</button>
                </div>

                <div>
                    Choose base currency here!
                </div>
                <hr/>
                <div className={s.resultsDiv}>
                    {props.results}
                </div>
            </div>
            <HintWrap/>
        </form>
        
        </>
        
    );
}

export default Courses;