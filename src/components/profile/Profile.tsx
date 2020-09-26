import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestGithubUser } from '../../store/action';

import './Profile.css';

const Profile: React.FC = () => {

    const [username, setUsername] = useState("");
    const dispatch = useDispatch();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleProfileSearch = async (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(requestGithubUser(username));
        setUsername('');
    };


    return (
        <div id="search-container">
            <div id="search-content">
                <div id="search-input">
                    <input placeholder="Search github user ..." type="text" value={username} onChange={onChangeHandler} />
                </div>
                <button id="btn-search" type="submit" onClick={handleProfileSearch}>Search</button>
            </div>
        </div>
    );
};

export default Profile;