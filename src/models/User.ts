export type User = {
    firstName: string;
    lastName: string;
    email: string
    authToken: string
    password: string
    id: string;
    createdAt: string;
    role: 'guest' | 'admin'
    pictureUrl: string;

}