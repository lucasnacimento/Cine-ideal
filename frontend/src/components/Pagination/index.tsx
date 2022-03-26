import { MoviePage } from '../../types/movie';
import './styles.css';

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {

    return (
        <div className="panel-buttons">
            <button className='panel-item' disabled={page.page === 1} onClick={() => onChange(page.page-1)}>Anterior</button>
            <span>{page.page} de {page.total_pages}</span>
            <button className='panel-item' disabled={page.page === page.total_pages} onClick={() => onChange(page.page+1)}>Proximo</button>
        </div>
    );
}

export default Pagination;