
import { AxiosApiError } from '@neo4j-crud/shared';
import { GraphVisData } from 'react-graph-vis';
import { useQuery } from 'react-query';
import * as api from '../../api';
import { AlertCombo, GraphVis } from '../../components';
import { useDebounce } from '../../hooks';

type ContentProps = {
    search: string;
};

export const Content: React.FC<ContentProps> = ({ search }) => {
    const debouncedSearch = useDebounce(search, 500);

    const { data, error, isLoading } = useQuery<GraphVisData, AxiosApiError>(
        ['visualization', debouncedSearch],
        () => api.visualization.get(search)
    );

    const noData = !data || data.nodes.length === 0;

    if (error || isLoading || noData) {
        return <AlertCombo error={error} isLoading={isLoading} noData={noData} />;
    }

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <GraphVis graph={data} />
        </div>
    );
};