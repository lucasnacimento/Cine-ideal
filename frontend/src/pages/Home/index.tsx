import Footer from "../../components/Footer";
import MovieCard from "../../components/MovieCard";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE_POPULAR, KEY_API, LANGUAGE_CODE } from '../../config/request';
import { MoviePage } from "../../types/movie";

function Home() {

  const [pageNumber, setPageNumber] = useState(1);

  const [page, setPage] = useState<MoviePage>({
    page: pageNumber,
    results: [],
    total_pages: 0,
    total_results: 0,
    qtdItemsFromPage: 20,
    beforePage: pageNumber-1,
    laterPage: pageNumber+1
  });

  useEffect(() => {
    axios
      .get(`${URL_BASE_POPULAR}${KEY_API}&${LANGUAGE_CODE}&page=${pageNumber}`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
      
      console.log(page.results);
    }, [pageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  }

  return (
    <>
      <Navbar />
        <div className="d-flex justify-content-center mt-5">
          <h1>Filmes</h1>
        </div>
        <div className="list-movies row ">
        {page.results.map((movie) => (
            <li key={movie.id} className="item-movie col-sm-6 col-lg-4 col-xl-2" >
              <MovieCard movie={movie} />
            </li>
          ))}

        </div>
      <Footer/>
    </>
  );
}

export default Home;
