import React, {useState} from 'react';
import { Link , useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css';

import LogoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';

export default function Register() {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');

    const history = useHistory();
    
    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };

        try{
            const response = await api.post('/ongs', data);

            alert(`Your Id: ${response.data.id}`);
            history.push("/");
        } catch (err){
            console.log(err);
            alert('Failed to Register, try again!');
        }
        
    }

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

                <form onSubmit={handleRegister}>

                    <input
                        placeholder='ONG'
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />

                    <input 
                        type='email' 
                        placeholder='E-mail'
                        value={email}
                        onChange={e => setEmail(e.target.value)} 
                    />

                    <input 
                    placeholder='WhatsApp'
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className='input-group'>
                        <input 
                        placeholder='City' 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        <input
                         placeholder='UF' 
                         style={{width: 80 }}
                         value={uf}
                         onChange={e => setUf(e.target.value)}
                          />
                    </div>

                    <button className='button' type="submit">Sign Up</button>
                </form>

            </div>
        </div>
    );
}