import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import * as z from "zod";
import { toast } from 'sonner'


const loginValidation = z.object({
    email: z.string().email("Invalid email address."),
    password: z.string().min(6, "Password is incorrect!"),
})

type SigninData = z.infer<typeof loginValidation>;

export default function Signin() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<SigninData>({
        email: "",
        password: ""
    })
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState<Record<string, string[] | undefined>>({});


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const validateResult = loginValidation.safeParse(
            formData
        )

        if (!validateResult.success) {
            setErrors(
                validateResult.error.flatten().fieldErrors
            );
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch("api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "identifierType": "email",
                    identifier: formData.email,
                    countryCode: "EG",
                    password: formData.password
                })
            });
            const data = await res.json();
            if (res?.ok) {
                console.log("success login");
                toast.success("user logged in successfully!");
                localStorage.setItem("token",data.data.tokens.accessToken)
                navigate("/shop")

            }
            if (!res?.ok) console.log(data.message)
            console.log("login result :", data)
        } catch (error) {
            console.log("error", error)
        } finally {
            setIsLoading(false);

        }

    }




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        setErrors(prev => {
            const updatedErrors = { ...prev };
            delete updatedErrors[e.target.name];
            return updatedErrors;
        })
    }

    return (
        <>
            <div className='bg-[#f5f5f5] p-6 min-h-screen'>
                <h2 className='mb-6 text-[#182232] font-bold'>ShopVerse</h2>

                <div className=''>
                    <h2 className='text-[#182232]'>Welcome Back</h2>
                    <p className='text-[#45474C]'>Enter your details to access your premium account.</p>

                    <div className='flex items-center justify-center w-2/3 mx-auto gap-2 md:gap-4 mt-10'>
                        <Button className='flex items-center px-8 py-4 cursor-pointer bg-transparent text-[#777a7f] border-[#94A3B8] border-1'>
                            <img alt="google logo" className='w-6 h-6' src='https://upload.wikimedia.org/wikipedia/commons/3/3c/Google_Favicon_2025.svg' />
                            <span>Google</span>
                        </Button>
                        <Button className='flex items-center px-8 py-4 cursor-pointer bg-transparent text-[#777a7f] border-[#94A3B8] border-1'>
                            <img alt="github logo" className='w-6 h-6' src='/github.png' />
                            <span>Github</span>
                        </Button>
                    </div>

                    <div className='credential-login relative mt-6 '>
                        <p className='text-center text-[#45474C]'>OR CONTINUE WITH EMAIL</p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className='w-full lg:w-1/2 mx-auto flex flex-col justify-center my-8 bg-white     rounded-lg p-6'>
                        <div>
                            <Label htmlFor="email" className='mb-2 text-[#45474C]'>Email Address</Label>
                            <Input
                                id='email'
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
                            <Label htmlFor="password" className='flex items-center justify-between mb-2 text-[#45474C]'>
                                <span>Password</span>
                                <span className='cursor-pointer'>
                                    <Link to="/reset-password">Forgot?</Link> </span>
                            </Label>
                            <Input
                                id='password'
                                value={formData.password}
                                onChange={handleChange}
                                className='mb-3 bg-white text-[#C5C6CD] ' name='password' type='password' placeholder='***********' />
                            {errors.password && (
                                <p className="text-red-500 text-sm">
                                    {errors.password[0]}
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

                            {isLoading ? "Signing in..." : "Sign in to VerseShop"} </Button>

                        <p className='text-center my-4'> Don't have an account?
                            <Link className='text-[#182232]' to="/sign-up"> Create Account</Link></p>


                    </form>
                </div>
            </div>
        </>
    )
}
