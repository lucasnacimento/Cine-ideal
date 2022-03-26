import './styles.css';
import { ReactComponent as ArrowRight } from "../../assets/img/arrow-rigth.svg"; 
import { ReactComponent as ArrowLeft } from "../../assets/img/arrow-left.svg"; 

function Carousel() {

    return (
        <div className="panel-carousel">
            <img src="https://image.tmdb.org/t/p/original/33wnBK5NxvuKQv0Cxo3wMv0eR7F.jpg" alt="" />
            <div className="carousel-details">
                <h1>United States of America</h1>
                <p>United States of America</p>
            </div>
                <button id="button-left"><ArrowLeft/></button>
                <button id="button-right"><ArrowRight/></button>
        </div>
    );
}

export default Carousel;