import React from 'react';
import { Followers } from '../../model/followers';
import DefaultAvatar from '../../images/default-avatar.jpg';

import './FollowerContent.css';

const FollowerContent: React.FC<{ follower: Followers }> = ({ follower }) => {
    return (
        <div id="follower-content">
            <div id="avatar-follower-content">
                <img id="follower-avatar" src={follower.avatar_url ? follower.avatar_url : DefaultAvatar} alt="follower-avatar" />
            </div>
            <div id="follower-info-content">
                <div id="follower-name-content">
                    {follower.name}
                </div>
                <div id="follower-url-content">
                    <a href={follower.email}>{follower.email}</a>
                </div>
            </div>
        </div>
    );
}

export default FollowerContent;