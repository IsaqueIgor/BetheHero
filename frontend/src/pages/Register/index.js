import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import LogoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Register() {
    return(
        <div className='register-container'>
            <div className='content'>
                <section>
                    <img src={LogoImg} alt='Be the Hero' />

                    <h1>Sign Up</h1>
                    <p>Join us and help people to find the incidents in your ONG</p>

                    <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#e02041' />
                    </Link>
                </section>
                <form>
                    <input placeholder='ONG' />
                    <input type='email' placeholder='E-mail' />
                    <input placeholder='WhatsApp' />

                    <div className='input-group'>
                        <input placeholder='City' />
                        <input placeholder='UF' style={{width: 80 }} />
                    </div>

                    <button className='button' type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}