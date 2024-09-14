
import React, { useState } from 'react';
import countries from './data/countries.json';
import './App.css'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    return countries.filter((country) => 
      country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">Country Search</h1>
      <input 
        type="text"
        placeholder="Search by country or capital"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
      <div className="country-list">
        {handleSearch().map((country, index) => (
          <div key={index} className="country-card">
            <h2 className="country-name">{country.country}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Official Language:</strong> {Array.isArray(country.official_language) ? country.official_language.join(', ') : country.official_language}</p>
            <p><strong>Currency:</strong> {country.currency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
