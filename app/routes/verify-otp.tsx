import React, { useState } from 'react'
import { Link } from 'react-router';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label';
import * as z from "zod";
import { API_URL } from "~/lib/api";

const verifyValidation = z.object({
    email: z.string().email("Invalid email address."),
})

export default function verifyOtp() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [errors, setErrors] = useState<Record<string, string[]>>({});



    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        const validateVerification = verifyValidation.safeParse({ email })
        if (!validateVerification.success) {
            setErrors(
                validateVerification.error.flatten().fieldErrors
            );
            return;
        }
        try {
            const result = await fetch(`${API_URL}/auth/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "identifierType": "email",
                    "identifier": `${email}`,
                    "countryCode": "EG",
                    "code": "123456"
                })
            });

            const data = await result.json();
            console.log("verify otp result =>", data)

        } catch (error) {
            console.log("error =>", error)
        }
    }


    return (

        <>
            <div className='bg-[#f5f5f5] p-6 min-h-screen'>
                <h2 className='mb-6 text-[#182232] font-bold'>ShopVerse</h2>

                <div className=''>
                    <h2 className='text-[#182232]'>Welcome Back</h2>
                    <p className='text-[#45474C]'>Enter your details to access your premium account.</p>


                    <form
                        onSubmit={handleVerifyOTP}
                        className='w-full lg:w-1/2 mx-auto flex flex-col justify-center my-8 bg-white     rounded-lg p-6'>
                        <div>
                            <Label className='mb-2 text-[#45474C]'>Email Address</Label>
                            <Input
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                className='mb-3 bg-white text-[#C5C6CD]' name="email" type='email' placeholder="Alex@gmail.com" />
                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email[0]}
                                </p>
                            )}

                        </div>


                        <Button
                            type='submit'
                            className='text-white bg-[#182232] cursor-pointer'
                        >Verify OTP</Button>

                        <p className='text-center my-4'> Don't have an account?
                            <Link className='text-[#182232]' to="/sign-up"> Create Account</Link></p>


                    </form>
                </div>
            </div>
        </>
    )
}
