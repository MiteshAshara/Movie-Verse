import React, { useState } from 'react';

function MovieCard({ title, link, image, category, defaultImage }) {
    const [imageSrc, setImageSrc] = useState(image);

    const handleError = () => {
        setImageSrc(defaultImage || 'data:image/jpeg;base64,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');
    };

    return (
        <div className="col-6 col-md-4 mb-4 mt-3">
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <div className="card h-100 shadow-lg border-light" style={{ transition: 'transform 0.2s' }}>
                    <img
                        src={imageSrc}
                        className="card-img-top"
                        alt={title || 'Image Not Found'}
                        style={{
                            height: 'auto', 
                            maxHeight: '850px',
                            padding: '0px',
                            border: '8px solid orange',
                            borderRadius: '10px 10px 0 0',
                            objectFit: 'cover',
                            transition: 'transform 0.5s',
                        }}
                        onError={handleError}
                        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title mt-2" style={{ fontWeight: 'bold', color: '#333', textAlign: 'center', flex: '1' }}>
                            {title || 'Title Name Not Found'}
                        </h5>
                        {(category === 'Hollywood' || category === 'Gujarati' || category === 'South' || category === 'Series') && (
                            <p className="card-text fw-bold" style={{ textAlign: 'center', color: '#666', fontSize: '14px' }}>
                                Category: {category || 'Category Not Found'}
                            </p>
                        )}
                        <a
                            href={link || '/'}
                            className="btn btn-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                marginTop: '10px',
                                transition: 'background-color 0.3s',
                                borderRadius: '5px',
                                textAlign: 'center',
                                flexShrink: '0',
                            }}
                            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#555')}
                            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#343a40')}
                        >
                            Watch Now
                        </a>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default MovieCard;
