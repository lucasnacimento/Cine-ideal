import axios from 'axios';
import { useEffect, useState } from 'react';
import { IMAGE_URL, KEY_API, LANGUAGE_CODE, URL_DETAILS_MOVIE } from '../../config/request';
import { Movie, MovieDetails } from '../../types/movie';

import './styles.css';

type Props = {
    movieId: string
}

function MovieCardDetails( {movieId} : Props) {

    const [movieDetails, setMovieDetails] = useState<MovieDetails>({
        adult: false,
        backdrop_path: "",
        belongs_to_collection: null,
        budget: 0,
        genres: [],
        homepage: "",
        id: 0,
        imdb_id: "",
        original_language: "",
        original_title: "",
        overview: "",
        popularity: 0,
        poster_path: "",
        production_companies: [],
        production_countries: [],
        release_date: "",
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: "",
        tagline: "",
        title: "",
        video: false,
        vote_average: 0,
        vote_count: 0
    });

    useEffect(() => {
        axios.get(`${URL_DETAILS_MOVIE}${movieId}?api_key=${KEY_API}&language=${LANGUAGE_CODE}`)
            .then(response => {
                setMovieDetails(response.data);
            })
    }, [movieId]);


    return (
        <div className="container block-detail">
        <img
          src={`${IMAGE_URL}${movieDetails?.poster_path}`}
          alt={movieDetails?.title}
        />
        <div className="text-details">
          <h2>{movieDetails?.title}</h2>
          <h5>Sinopse</h5>
          <p>{movieDetails?.overview}</p>
          <ul className="details">
              <li>Genêro: {movieDetails?.genres.map(res => (res.name+', '))}</li>
              <li>Data de Lançamento: {movieDetails?.release_date.split('-').reverse().join('/')}</li>
          </ul>
          <ul className="details">
              <li>Tempo de Duração: {movieDetails?.runtime+" minutos"}</li>
              <li>Idioma Original: {movieDetails?.original_language}</li>
          </ul>
          <h2>{movieDetails?.adult}</h2>
        </div>
      </div>
    )
}

export default MovieCardDetails;