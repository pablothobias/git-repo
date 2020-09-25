import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <>
            <div id="search-container">
                <div id="search-content">
                    <div id="search-input">
                        <input placeholder="Search github user ..." type="text" onChange={() => {}} />
                    </div>
                    <button id="btn-search" type="submit" onClick={() => {}} > Search
                    </button>
                </div>
            </div>
        </>
    );
};

export default Profile;