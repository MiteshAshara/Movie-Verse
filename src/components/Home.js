import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import moviesData from '../components/movies.json';

function Home({ searchTerm }) {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); 
    const [hasMore, setHasMore] = useState(true);

    const MOVIES_PER_PAGE = 4;

    // Load movies based on the current page
    useEffect(() => {
        const loadMovies = () => {
            const start = (page - 1) * MOVIES_PER_PAGE;
            const end = start + MOVIES_PER_PAGE;
            const newMovies = moviesData.slice(start, end);

            if (newMovies.length === 0) {
                setHasMore(false);
            } else {
                setMovies((prevMovies) => [...prevMovies, ...newMovies]);
            }
        };

        loadMovies();
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.scrollHeight - 1
            ) {
                if (hasMore) {
                    setPage((prevPage) => prevPage + 1); // Increment page to load more data
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore]);

    // Filter movies based on the search term
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container my-4">
            <h4 className="text-center mb-4" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}>
                Featured Movies
            </h4>
            <div className="row">
                {filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, index) => (
                        <MovieCard
                            key={index}
                            title={movie.title}
                            link={movie.link}
                            image={movie.image}
                            category={movie.category}
                        />
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p style={{ fontSize: '1.5rem', color: '#666' }}>No movies found matching your search.</p>
                    </div>
                )}
            </div>
            {!hasMore && (
                <div className="text-center mt-4">
                    <p style={{ fontSize: '1rem', color: '#666' }}>No more data to load.</p>
                </div>
            )}
        </div>
    );
}

export default Home;
