import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the navbar
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false); // Close the navbar
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside the navbar
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark shadow-sm" ref={navbarRef}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">🎬 MovieVerse</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/hollywood-movies">Hollywood</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/series">Series</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/south-movies">South Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gujarati-movies">Gujarati</Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search movies..." 
              aria-label="Search" 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
