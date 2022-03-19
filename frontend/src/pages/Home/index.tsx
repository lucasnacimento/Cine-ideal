import Footer from "../../components/Footer";
import MovieCard from "../../components/MovieCard";
import Navbar from "../../components/Navbar";


function Home() {
  return (
    <>
      <Navbar />
        <div className="d-flex justify-content-center mt-5">
          <h1>Movies</h1>
        </div>
        <MovieCard />
      <Footer/>
    </>
  );
}

export default Home;
