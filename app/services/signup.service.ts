import * as z from "zod";
import { API_URL } from '~/lib/api'

export const signupValidation = z.object({
    firstName: z.string().trim().regex(/^[A-Z]/, "Must start with capital letter").min(3, "must be at least 3 characters and start with Capital letter"),
    lastName: z.string().trim().regex(/^[A-Z]/, "Must start with capital letter").min(3, "must be at least 3 characters and start with Capital letter"),
    phoneNumber: z.string().trim().regex(
        /^(010|011|012|015)\d{8}$/,
        "Invalid Egyptian phone number"
    ),
    email: z.string().trim().email("Invalid email address."),
    password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export type SignupData = z.infer<typeof signupValidation>


export async function registerUser(data: SignupData) {
    try {

        const res = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...data,
                countryCode: "EG",
                userType: "USER"
            })
        });

        const result = await res.json();
        return result;
        
    } catch (error) {
        console.log("error =>", error);
        return error
    }
}
