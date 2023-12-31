import { Person, PersonMovie, relationships } from '@neo4j-crud/shared';
import { Link } from 'react-router-dom';
import { HighlightedText } from '../../../components';
import { fileNameFromString } from '../../../utils/fileNameFromString';
import { Movies } from './Movies';

type ItemProps = {
    person: Person;
    search: string;
};

export const Item: React.FC<ItemProps> = ({ person, search }) => {
    return (
        <li key={person.name}>
            <Link to={`${person.id}/edit`}>
                <img
                    src="/img/px.gif"
                    style={{
                        backgroundImage: `url("/img/people/${fileNameFromString(
                            person.name
                        )}.jpg")`,
                    }}
                    alt={person.name}
                />
                <div className="content">
                    <div>
                        <h3>
                            <HighlightedText text={person.name} search={search} />
                        </h3>
                        <div className="released">Born: {person.born}</div>
                        <div className="relationships">
                            {person.movies !== undefined &&
                                relationships.map((relationship) => (
                                    <Movies
                                        key={relationship.key}
                                        movies={person.movies as PersonMovie[]}
                                        relationship={relationship}
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