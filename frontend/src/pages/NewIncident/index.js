import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
          <div className="content">
            <section>
              <img src={logoImg} alt="Be The Hero" />
              <h1>Register new Incident</h1>
              <p>
              Describe the case in detail to find a hero to solve this.
              </p>
    
              <Link to="/profile" className="back-link">
                <FiArrowLeft size={16} color="#e02041" />
                Back to Home
              </Link>
            </section>
    
            <form>
              <input
                placeholder="Title"
              />
              <textarea
                placeholder="Description"
              />
              <input
                placeholder="Price"
              />
    
              <button className="button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
}