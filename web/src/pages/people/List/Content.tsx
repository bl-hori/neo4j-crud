import { AxiosApiError, Person } from '@neo4j-crud/shared';
import { useQuery } from 'react-query';
import * as api from '../../../api';
import { AlertCombo } from '../../../components';
import { useDebounce } from '../../../hooks/useDebounce';
import { Item } from './Item';

type ContentProps = {
    search: string;
};

export const Content: React.FC<ContentProps> = ({ search }) => {
    const debouncedSearch = useDebounce(search, 500);

    const { data, error, isLoading } = useQuery<Person[], AxiosApiError>(
        ['people', debouncedSearch],
        () => api.people.getAll(search)
    );

    const noData = !data || data.length === 0;

    if (error || isLoading || noData) {
        return <AlertCombo error={error} isLoading={isLoading} noData={noData} />;
    }

    return (
        <ul className="record-list">
            {data.map((person) => (
                <Item key={person.id} person={person} search={search} />
            ))}
        </ul>
    );
};