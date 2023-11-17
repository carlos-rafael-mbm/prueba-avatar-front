import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieService from '../services/MovieService';
import Spinner from '../components/SpinnerComponent';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await MovieService.getAllMovies();
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error recuperando películas: ', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const extractIdFromUrl = (url) => {
    const finalUrl = url.endsWith('/') ? url.slice(0, -1) : url;
    const urlFragments = finalUrl.split('/');
    return urlFragments[urlFragments.length - 1];
  };

  return (
    <div className="vh-100">
    {loading ? <Spinner /> : 
        <div className='row p-5'>
            <h2 className="my-4 text-center display-1"><span className='text-light'>Listado de películas</span></h2>
            {movies.map((movie, index) => (
            <div key={index} className="col-md-4 mb-4">
                <div className="card bg-light">
                <div className="card-body">
                    <h5 className="card-title py-2">{movie.title}</h5>
                    <div className="text-center">
                    <Link to={`/movies/${extractIdFromUrl(movie.url)}`} className="btn btn-primary">
                        Ver Detalles
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
    }
    </div>
  );
};

export default MovieList;