import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieService from '../services/MovieService';
import Spinner from '../components/SpinnerComponent';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await MovieService.getMovie(id);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error obteniendo el detalle de la película: ', error);
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  return (
    <div className="vh-100">
        {loading ? <Spinner /> : 
            <div className="row p-5">
                <div className="container p-5">
                    {movie && (
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">{movie.title}</h5>
                            <p className="card-text text-center">{movie.openingCrawl}</p>
                            <p className="card-text"><strong>Fecha de lanzamiento:</strong> {movie.releaseDate}</p>
                            {movie.characters && movie.characters.length > 0 && (
                                <div>
                                    <h6 className="card-subtitle my-3 text-center">Personajes:</h6>
                                    <ul className="list-group text-center">
                                    {movie.characters.map((character, index) => (
                                        <li key={index} className="list-group-item">
                                        <strong>{character.name}</strong> - Peso: {character.mass}, Altura: {character.height}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                )}
                            <div className="text-center">
                                <Link to="/movies" className="btn btn-primary mt-2">
                                Volver a la Lista
                                </Link>
                            </div>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        }
    </div>
  );
};

export default MovieDetail;
