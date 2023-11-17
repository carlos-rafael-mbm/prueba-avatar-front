import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/v1';

const MovieService = {
    getAllMovies: () => axios.get(`${API_BASE_URL}/movies`),
    getMovie: (id) => axios.get(`${API_BASE_URL}/movies/${id}`)
}

export default MovieService;