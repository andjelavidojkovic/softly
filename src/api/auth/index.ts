import { AuthResponse } from "../../models/Auth"
import httpClient from "../httpClient"

const login = async (email: string, password: string) => {
    return httpClient.post<AuthResponse>('/users/signin', {
        email,
        password
    })
}

export default {
    login
}