import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import logoImg from '../../assets/logo.svg';

import api from "../../services/api";

import './styles.css';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongName = localStorage.getItem("ongName");
    const ongId = localStorage.getItem("ongId");

    const history = useHistory();

    return (
        <div className="profile-container">
          <header>
            <img src={logoImg} alt="Be The Hero" />
            <span>Welcome, ss</span>
    
            <Link to="/incidents/new" className="button">
              Register new Incident
            </Link>
    
            <button type="button">
              <FiPower size={18} color="#e02041" />
            </button>
          </header>
    
          <h1> Incidents</h1>
          </div>
          )
}
