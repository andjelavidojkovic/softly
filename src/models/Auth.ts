import { User } from "./User";

export type AuthResponse = {
    accessToken: string;
    id: string;
    user: User
}