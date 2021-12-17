import React from 'react';
import { useState } from 'react';
import Converter from './converter.js';
import inputValidator from '../utilites/inputValidator.js';
import rateRequest from '../utilites/rateRequest.js';
import ratesCounter from '../utilites/ratesCounter.js';
import Rub from '../utilites/rubObject.js';

const ConverterWrap = () => {

    const [currencyInput, setCurrencyInput] = useState('');
    const [result, setResult] = useState('');

    const submitForm = async e => {
        e.preventDefault();
        setCurrencyInput('');
        let rates = await rateRequest();
        rates = {...rates, ...Rub}
        let validatedInputObj = inputValidator(currencyInput, rates);
        if (!validatedInputObj) {
           return alert('Input is incorrect!');
        }
        console.log(rates);
        
        setResult( ratesCounter(rates, validatedInputObj) );
    }

    const handleChange = (event) => {
        setCurrencyInput(event.target.value);
    }

    return <Converter handleChange={handleChange}
        submitForm={submitForm}
        currencyInput={currencyInput}
        result={result}
         />
}

export default ConverterWrap;