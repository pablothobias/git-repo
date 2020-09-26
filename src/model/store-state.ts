import { User } from "./user";

export interface GITHUB_STATE {
    user: User | null
    loading: boolean;
    error: boolean;
};