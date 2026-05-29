import * as z from "zod";
import { API_URL } from '~/lib/api'


// sign up
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

// sign in

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

// verify otp

export const verifyValidation = z.object({
    phoneNumber: z.string().trim().regex(
            /^(010|011|012|015)\d{8}$/,
            "Invalid Egyptian phone number"
        ),
  code: z
    .string()
    .length(6, "OTP must be 6 digits"),
})

export type VerifyOTP = z.infer<typeof verifyValidation>
type VerifyOTPResponse = {
    ok: boolean;
    data:{
        success?:string;
        message?:string;
        errors?:{
            message:string;
        }[]
    }
}

export async function verifyOTP (data:VerifyOTP):Promise<VerifyOTPResponse>{

 const res = await fetch(`${API_URL}/auth/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identifierType: "phoneNumber",
                    identifier: data.phoneNumber,
                    countryCode: "EG",
                    code: data.code
                })
            });

            const result = await res.json();
            return {
                ok:res.ok,
                data: result
            }
}

  

