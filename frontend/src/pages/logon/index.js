import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'; 

import './styles.css'

import HeroesImg from '../../assets/heroes.png';
import Logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function Logon (){
    const [id, setId] = useState("");

    const history = useHistory();

    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={Logo} alt='logo' />

                <form>
                    <h1>Sign In</h1>

                    <input placeholder='Your Id' />
                    <button class='button' type='submit'>Enter</button>

                    <Link to='/register'>
                        <FiLogIn size={16} color="#E02041" />
                        New here?
                    </Link>
                </form>
            </section>
             <img src={HeroesImg} alt='heroes' />
        </div>
    );
};