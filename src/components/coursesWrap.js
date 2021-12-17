import React from 'react';
import Courses from './courses.js';
import rateRequest from '../utilites/rateRequest.js';
import { useState } from 'react';
import valutes from '../utilites/valutes.json';
import compareCurrencies from '../utilites/compareCurrencies.js';
import Rub from '../utilites/rubObject.js';

const CoursesWrap = () => {

    const [optionsArray, setOptionsArray] = useState([]);
    const [baseCurrency, setBaseCurrency] = useState('');
    const [results, setResults] = useState([]);
    const ratesObj = JSON.parse(JSON.stringify(valutes));

    const getCurrenciesArrayJSX = () => {

        const currenciesArray = [];
        for (let currName in ratesObj.Valute) {
            currenciesArray.push(currName);
        }
        setOptionsArray(currenciesArray.map((item, index) => <option key={index}>{item}</option>));

    }

    const getRates = async e => {
        e.preventDefault();
        let rates = await rateRequest();
        rates = {...rates, ...Rub};
        if (!baseCurrency) return alert('No base currency selected!');
        const arrayOfResults = compareCurrencies(baseCurrency, rates);
        setResults ( arrayOfResults.map( (item, index) => <div key={index}>{item}</div> ) ); 
        
    }

    const selectBaseCurrency = (event) => {
        setBaseCurrency(event.target.value.toUpperCase());
    }

    return <Courses
        optionsArray={optionsArray}
        getCurrenciesArrayJSX={getCurrenciesArrayJSX}
        selectBaseCurrency={selectBaseCurrency}
        getRates={getRates}
        results={results} />;

}

export default CoursesWrap;