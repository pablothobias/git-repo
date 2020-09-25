import { Followers } from "./followers";
import { Repositories } from "./repositories";

export interface User {
    name: string;
    login: string;
    avatar_url: string;
    followers: Followers[];
    following: number;
    public_gists: number;
    organizations_url: string;
    repositories: Repositories[];
}