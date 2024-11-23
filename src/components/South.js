import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import moviesData from '../components/movies.json'; 

function South({ searchTerm }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const hollywoodMovies = moviesData.filter(movie => movie.category === 'South');
        setMovies(hollywoodMovies);
    }, []);

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container my-4">
            <h4  className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>South Movies</h4>
            <div className="row">
                {filteredMovies.map((movie, index) => (
                    <MovieCard 
                        key={index} 
                        title={movie.title} 
                        link={movie.link} 
                        image={movie.image} 
                        category={movie.category}
                    />
                ))}
            </div>
        </div>
    );
}

export default South;
