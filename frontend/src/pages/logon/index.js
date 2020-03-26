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

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("/sessions", { id });

            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", response.data.name);

            history.push("/profile");
        } catch (err) {
            console.log(err);
            alert("Login Failed, Try again");
        }
    }

    return (
        <div className='logon-container'>
            <section className='form'>
                <img src={Logo} alt='logo' />

                <form onSubmit={handleLogin}>
                    <h1>Sign In</h1>

                    <input 
                    placeholder='Your Id' 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                    
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