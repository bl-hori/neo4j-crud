import { AxiosApiError, Movie } from '@neo4j-crud/shared';
import { useQuery } from 'react-query';
import * as api from '../../../api';
import { AlertCombo } from '../../../components';
import { useDebounce } from '../../../hooks';
import { Item } from './Item';

const url = `${import.meta.env.VITE_API_URL}/movies`;

type ContentProps = {
    search: string;
}

export const Content: React.FC<ContentProps> = ({ search }) => {
    const debouncedSearch = useDebounce(search, 500);

    const { data, error, isLoading } = useQuery<Movie[], AxiosApiError>(
        ['movies', debouncedSearch],
        () => api.movies.getAll(search)
    );

    const noData = !data || data.length === 0;

    if (error || isLoading || noData) {
        return <AlertCombo error={error} isLoading={isLoading} noData={noData} />;
    }

    return (
        <ul className="record-list">
            {data.map((movie) => (
                <Item key={movie.id} movie={movie} search={search} />
            ))}
        </ul>
    )
};