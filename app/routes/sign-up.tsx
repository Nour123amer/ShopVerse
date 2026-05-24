import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import * as z from "zod";

const signupValidation = z.object({
    firstName: z.string().regex(/^[A-Z]/, "Must start with capital letter").min(3, "must be at least 3 characters and start with Capital letter"),
    lastName: z.string().regex(/^[A-Z]/, "Must start with capital letter").min(3, "must be at least 3 characters and start with Capital letter"),
    phoneNumber: z.string().regex(
        /^(010|011|012|015)\d{8}$/,
        "Invalid Egyptian phone number"
    ),
    email: z.string().email("Invalid email address."),
    pass: z.string().min(6, "Password must be at least 6 characters"),
});

    type SignupData = z.infer<typeof signupValidation>

export default function Signup() {
    const [formData, setFormData] = useState<SignupData>({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        pass:""
    })
    const [isLoading, setIsLoading]= useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState<Record<string, string[] | undefined>>({});





    const handleVerifyOTP = async () => {
        const res = await fetch("/api/auth/send-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                identifierType: "phoneNumber",
                identifier: formData.phoneNumber,
                countryCode: "EG",
                code:"123456"
            })
        });

        const data = await res.json();
        console.log("verify otp result", data)
    }
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true)
        const validationResult = signupValidation.safeParse(
            formData,
        );

        if (!validationResult.success) {
            setErrors(
                validationResult.error.flatten().fieldErrors
            );
            setIsLoading(false)
            return

        }

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.pass,
                    phoneNumber: formData.phoneNumber,
                    countryCode: "EG",
                    userType: "USER"
                })
            });

            const data = await res.json();
            if (res.ok) {
                console.log(data);
                await handleVerifyOTP();
                navigate("/shop")

            }
            if (!res.ok) console.log(data?.message)
        } catch (error) {
            console.log("error =>", error)
        } finally{
            setIsLoading(false)
        }
    }

       const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value});

        setErrors(prev => {
            const updatedErrors ={...prev};
            delete updatedErrors[e.target.name];
            return updatedErrors;
        })
    }



    return (
        <div className='bg-[#f5f5f5] p-6 min-h-screen'>
            <h2 className='mb-6 text-[#182232] font-bold'>ShopVerse</h2>

            <div className=''>
                <h2 className='text-[#182232]'>Welcome Back</h2>
                <p className='text-[#45474C]'>Enter your details to create your premium account.</p>

                <form
                    onSubmit={handleRegister}
                    className='w-full lg:w-1/2 mx-auto flex flex-col justify-center my-8 bg-white     rounded-lg p-6'>
                    <div className='flex gap-3'>
                        <div>
                            <Label htmlFor="firstName" className='mb-2 text-[#45474C]'>First Name</Label>
                            <Input
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className='mb-3 bg-white text-[#C5C6CD]' name="firstName" type='text' placeholder="John" />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">
                                    {errors.firstName[0]}
                                </p>
                            )}
                        </div>
                        <div>
                            <Label htmlFor="lastName" className='mb-2 text-[#45474C]'>Last Name</Label>
                            <Input
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className='mb-3 bg-white text-[#C5C6CD]' name="lastName" type='text' placeholder="Alex" />
                            {errors?.lastName && (
                                <p className="text-red-500 text-sm">
                                    {errors.lastName[0]}
                                </p>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="email" className='mb-2 text-[#45474C]'>Email Address</Label>
                        <Input
                        id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='mb-3 bg-white text-[#C5C6CD]' name="email" type='email' placeholder="Alex@gmail.com" />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email[0]}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="phoneNumber" className='mb-2 text-[#45474C]'>Phone Number</Label>
                        <Input
                            id="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className='mb-3 bg-white text-[#C5C6CD]' name="phoneNumber" type='tel' />
                        {errors.phoneNumber && (
                            <p className="text-red-500 text-sm">
                                {errors.phoneNumber[0]}
                            </p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="pass" className='flex items-center justify-between mb-2 text-[#45474C]'>
                            <span>Password</span>
                        </Label>
                        <Input
                        id='pass'
                            value={formData.pass}
                            onChange={handleChange}
                            className='mb-3 bg-white text-[#C5C6CD] ' name='pass' type='password' placeholder='***********' />
                        {errors.pass && (
                            <p className="text-red-500 text-sm">
                                {errors.pass[0]}
                            </p>
                        )}
                    </div>
                    <div className='flex items-center gap-2 my-3'>
                        <Checkbox className=' bg-white cursor-pointer' />
                        <span>Keep me logged in</span>
                    </div>

                    <Button
                    disabled={isLoading}
                        type='submit'
                        className='text-white bg-[#182232] cursor-pointer'
                    >
                       {isLoading ? "Signing up":"Sign up to VerseShop"} </Button>

                    <p className='text-center my-4'> Have an account?
                        <Link className='text-[#182232]' to="/sign-in"> Sign In</Link></p>


                </form>
            </div >
        </div >
    )
}
