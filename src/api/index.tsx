import { User } from "../model/user";

const fetchUserFromGithub = async (username: string) => {
    try {
        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson: User = await profile.json();
        console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        console.log(repoJson);

        return { profileJson, repoJson };
    } catch (error) {
        throw new Error();
    }
};

export default fetchUserFromGithub;