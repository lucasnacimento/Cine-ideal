import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import MovieCardDetails from "../../components/MovieCardDetails";
import Navbar from "../../components/Navbar";

function MovieDetails() {

  const params = useParams();

  return (
    <div className="div-walpapper">
      <Navbar />
      <MovieCardDetails movieId={`${params.id}`}/>
      <Footer />
    </div>  
  );
}

export default MovieDetails;
