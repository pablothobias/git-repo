import { Followers } from "../model/followers";
import { Repositories } from "../model/repositories";
import { User } from "../model/user";
import fetchGithubRepositoryWatcher from "../store/saga/githubSaga";

const apiOrchestrator = async (username: string) => {
    try {
        const rawUser = await fetchUser(username);
        const repositories = await fetchRepositories(rawUser.repos_url);
        const followers = await fetchFollowers(username, 5);
        const user: User = sanitizeUser({ rawUser, repositories, followers });
        console.log(user);
        // return { user, repositories };

    } catch (error) {
        throw new Error(error);
    }
}

const fetchUser = async (username: string) => {
    try {
        const profile = await fetch(`https://api.github.com/users/${username}`);
        return await profile.json();
    } catch (error) {
        throw (error);
    }
};

const fetchRepositories = async (repos_url: string) => {
    try {
        const rawRepositories = await fetch(repos_url);
        const repoJson = await rawRepositories.json();
        const repositories: Repositories[] = repoJson.map((repo: any) => {
            return {
                name: repo.name,
                forks: repo.forks,
                language: repo.language,
                url: repo.url,
            }
        });
        return repositories;
    } catch (error) {
        throw (error);
    }
};

const fetchFollowers = async (username: string, limit: number) => {
    try {
        const rawFollowers = await fetch(`https://api.github.com/users/${username}/followers?per_page=${limit}`);
        const followersJson = await rawFollowers.json();
        const followers: Followers[] = followersJson.map((follower: any) => {
            return {
                avatar_url: follower.avatar_url,
                name: follower.login,
                email: follower.url,
            }
        });
        return followers;
    } catch (error) {
        throw (error);
    }
};

const sanitizeUser = (data: any) => {

    return {
        name: data.rawUser.name,
        login: data.rawUser.login,
        avatar_url: data.rawUser.avatar_url,
        followers: data.followers,
        following: data.rawUser.following,
        public_gists: data.rawUser.public_gists,
        organizations_url: data.rawUser.organizations_url,
        repositories: data.repositories
    };
};

export default apiOrchestrator;