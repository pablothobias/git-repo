import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GITHUB_STATE } from '../../model/store-state';
import { requestGithubUser } from '../../store/action';

import './Profile.css';

const Profile: React.FC = () => {

    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);
    const response = useSelector<GITHUB_STATE>((state: GITHUB_STATE) => state);
    const dispatch = useDispatch();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleProfileSearch = async (e: React.MouseEvent) => {
        e.preventDefault();

        dispatch(requestGithubUser(username));

        // if (profileJson) {
        //     setData(profileJson);
        //     setRepositories(repoJson);
        // }
    };


    return (
        <div id="search-container">
            <div id="search-content">
                <div id="search-input">
                    <input placeholder="Search github user ..." type="text" value={username} onChange={onChangeHandler} />
                </div>
                <button id="btn-search" type="submit" onClick={handleProfileSearch} > Search
                    </button>
            </div>
        </div>
    );
};

export default Profile;