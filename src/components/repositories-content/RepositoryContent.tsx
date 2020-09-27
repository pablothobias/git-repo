import React from 'react';
import { Repositories } from '../../model/repositories';

import './RepositoryContent.css';

const RepositoryContent: React.FC<{ repository: Repositories }> = ({ repository }) => {
    return (
        <div id="repository-content">
                <p>Name: {repository.name}</p>
                <p>Language: {repository.language}</p>
                <p>Forks: {repository.forks}</p>
                <a href={repository.url} >{repository.url}</a>
        </div>
    );
}

export default RepositoryContent;