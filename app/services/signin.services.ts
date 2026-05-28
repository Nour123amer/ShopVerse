import * as z from "zod";
import { API_URL } from '~/lib/api'

export const loginValidation = z.object({
    email: z.string().email("Invalid email address."),
    password: z.string().min(6, "Password is incorrect!"),
})

export type SigninData = z.infer<typeof loginValidation>;

type LoginResponse = {
    ok: boolean,
    data: {
        errors?: {
            message: string
        }[],
        data?: {
            tokens: {
                accessToken: string
            }
        },
        message?: string,


    },

}

export async function loginUser(data: SigninData): Promise<LoginResponse> {

    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            identifier: data.email,
            password: data.password,
            identifierType: "email",
            countryCode: "EG",
        })
    });
    const result = await res.json();
    return {
        ok: res.ok,
        data: result
    }


}