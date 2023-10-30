import { useState } from 'react';
import { Content } from './Content';

export const List = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <div>
            <div className="actions-bar">
                <h2>Movies</h2>
                <div className="filter">
                    <input type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by movie title or person name..."
                    />
                </div>
            </div>
            <Content search={search} />
        </div>
    )
};