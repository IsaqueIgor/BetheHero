import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
      api
      .get('/profile' , {
        headers: { Authorization: ongId}
      }).then(response => {
        setIncidents(response.data);
      });
    }, [ongId]);

    async function handleDeleteIncident(id) {
      try {
        await api.delete(`incidents/${id}`, {
          headers: {
            Authorization: ongId
          }
        });
  
        setIncidents(incidents.filter(caso => incidents.id !== id));
      } catch (err) {
        alert("Not able to Delete!");
      }
    }

    function handleLogout() {
      localStorage.clear();
      history.push("/");
    }

    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="Be The Hero" />
          <span>Welcome, {ongName}</span>
  
          <Link to="/incidents/new" className="button">
            Register new Incident
          </Link>
  
          <button type="button" onClick={handleLogout}>
            <FiPower size={18} color="#e02041" />
          </button>
        </header>
  
        <h1>Incidents</h1>
  
        <ul>
          {incidents.map(casos => (
            <li key={incidents.id}>
              <strong>Incident:</strong>
              <p>{incidents.title}</p>
  
              <strong>Description:</strong>
              <p>{incidents.description}</p>
  
              <strong>Price:</strong>
              <p>
                {Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL"
                }).format(incidents.value)}
              </p>
  
              <button
                type="button"
                onClick={() => handleDeleteIncident(incidents.id)}
              >
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}
