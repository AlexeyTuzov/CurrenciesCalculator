import React from 'react';
import s from './css/home.module.css';
import { Link } from 'react-router-dom';
import img from '../assets/background_2.jpg';


const Home = () => {

    return (
        <>
            <img src={img} className={s.background} alt='' />
            <div className={s.table}>
                <p>Here You can check rates of foreign exchange!</p>
                <div className={s.buttonWrap}>
                    <p>Converter allows You to convert one currency to another</p>
                    <Link to='/converter'>
                        <button className={s.button}>Converter</button>
                    </Link>
                </div>
                <div className={s.buttonWrap}>
                    <p>Cources shows You a list of currencies rates, related to selected one</p>
                    <Link to='/courses'>
                        <button className={s.button}>Cources</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;