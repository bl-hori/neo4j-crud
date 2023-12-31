import {
    Movie,
    RelationshipCollection,
    relationships
} from '@neo4j-crud/shared';
import { Link } from 'react-router-dom';
import { HighlightedText } from '../../../components';
import { fileNameFromString } from '../../../utils/fileNameFromString';
import { People } from './People';

export type ItemProps = {
    movie: Movie;
    search: string;
};

export const Item: React.FC<ItemProps> = ({ movie, search }) => {
    return (
        <li key={movie.title}>
            <Link to={`${movie.id}/edit`}>
                <img
                    src="/img/px.gif"
                    style={{
                        backgroundImage: `url("/img/movies/${fileNameFromString(
                            movie.title
                        )}.jpg")`,
                    }}
                    alt={movie.title}
                />
                <div className="content">
                    <div>
                        <h3>
                            <HighlightedText text={movie.title} search={search} />
                        </h3>
                        <div className="released">Released: {movie.released}</div>
                        <div className="tagline">{movie.tagline}</div>
                        <div className="relationships">
                            {relationships.map((relationship) => (
                                <People
                                    key={relationship.key}
                                    relationship={relationship}
                                    people={
                                        movie.people[
                                        relationship.collection as RelationshipCollection
                                        ]
                                    }
                                    search={search}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="action">
                        <button className="ghost">Edit</button>
                    </div>
                </div>
            </Link>
        </li>
    );
};