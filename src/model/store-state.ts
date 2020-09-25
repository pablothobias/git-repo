import { User } from "./user";

export interface GITHUB_STATE {
    data: User | {};
    error: boolean;
    loading: boolean;
}