import React from 'react';
import s from './css/converter.module.css';
import img from '../assets/background_1.png';
import HintWrap from './hintWrap.js';

const Converter = props => {

    return (
        <>
        <img src={img} className={s.background} alt=''/>
        <form className={s.box}
            name='converterForm'
            onSubmit={props.submitForm}>

            <output className={s.output} name='converterOutput' type='text'>
                {props.result}
            </output>
            <div>Results</div>

            <div className={s.inputDiv}>
                <input className={s.input}
                    name='converterInput'
                    type='text'
                    placeholder='f.e. "1 usd in rub"'
                    value={props.currencyInput}
                    onChange={props.handleChange} />
                <button className={s.sumbitButton}>Sumbit</button>
            </div>

            <div>Please enter Your require here</div>
            <HintWrap/>
        </form>
        
        </>

    );
}

export default Converter;