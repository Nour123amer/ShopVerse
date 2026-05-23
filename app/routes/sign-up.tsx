import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import * as z from "zod"; 

export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();
 
const signupValidation = z.object({ 
  firstName: z.string().min(3,"must be at least 3 characters and start with Capital letter"),
  lastName: z.string().min(3,"must be at least 3 characters and start with Capital letter"),
  phoneNumber: z.string().regex(
      /^(010|011|012|015)\d{8}$/,
      "Invalid Egyptian phone number"
    ),
  email:z.string().email("Invalid email address."),
  pass:z.string().min(6, "Password must be at least 6 characters"),
});

type signupData = z.infer<typeof signupValidation>



    const handleVerifyOTP = async () => {
        const res = await fetch("/api/auth/send-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                identifierType: "email",
                identifier: `${ email }`,
                "countryCode": "EG"
            })
        });

        const data = await res.json();
        console.log("verify otp result",data)
    }
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationResult = signupValidation.safeParse({
            firstName,
            lastName,
            email,
            phoneNumber,
            pass
        });

        if(!validationResult.success) return;

            try {
                const res = await fetch("/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: pass,
                        phoneNumber: phoneNumber,
                        countryCode: "EG",
                        userType: "USER"
                    })
                });

                const data = await res.json();
                if (res.ok) {
                    console.log(data);
                    handleVerifyOTP();
                    navigate("/shop")

                }
                if (!res.ok) console.log(data?.message)
            } catch (error) {
                console.log("error =>", error)
            }
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
                            <Label className='mb-2 text-[#45474C]'>First Name</Label>
                            <Input
                                value={firstName}
                                onChange={(e) => { setFirstName(e.target.value) }}
                                className='mb-3 bg-white text-[#C5C6CD]' name="firstName" type='name' placeholder="John" />

                        </div>
                        <div>
                            <Label className='mb-2 text-[#45474C]'>Last Name</Label>
                            <Input
                                value={lastName}
                                onChange={(e) => { setLastName(e.target.value) }}
                                className='mb-3 bg-white text-[#C5C6CD]' name="lastName" type='name' placeholder="Alex" />
                        </div>
                    </div>

                    <div>
                        <Label className='mb-2 text-[#45474C]'>Email Address</Label>
                        <Input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className='mb-3 bg-white text-[#C5C6CD]' name="email" type='email' placeholder="Alex@gmail.com" />
                    </div>
                    <div>
                        <Label className='mb-2 text-[#45474C]'>Phone Number</Label>
                        <Input
                            value={phoneNumber}
                            onChange={(e) => { setPhoneNumber(e.target.value) }}
                            className='mb-3 bg-white text-[#C5C6CD]' name="phone" type='tel' />
                    </div>
                    <div>
                        <Label className='flex items-center justify-between mb-2 text-[#45474C]'>
                            <span>Password</span>
                            <span>Forgot?</span>
                        </Label>
                        <Input
                            value={pass}
                            onChange={(e) => { setPass(e.target.value) }}
                            className='mb-3 bg-white text-[#C5C6CD] ' name='password' type='password' placeholder='***********' />

                    </div>
                    <div className='flex items-center gap-2 my-3'>
                        <Checkbox className=' bg-white cursor-pointer' />
                        <span>Keep me logged in</span>
                    </div>

                    <Button
                        type='submit'
                        className='text-white bg-[#182232] cursor-pointer'
                    >Sign up to VerseShop</Button>

                    <p className='text-center my-4'> Have an account?
                        <Link className='text-[#182232]' to="/sign-in"> Sign In</Link></p>


                </form>
            </div >
        </div >
    )
}
