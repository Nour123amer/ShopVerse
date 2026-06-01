import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Checkbox } from '~/components/ui/checkbox'
import { toast } from 'sonner'
import { registerUser, signupValidation, type SignupData } from '~/services/auth.service'
import InputField from '~/components/form/InputField'
import FormLabel from '~/components/form/Label'
import SubmitBtn from '~/components/form/SubmitBtn'
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type ApiError = {
    field: string;
    message: string;
};

export default function Signup() {
    const [formData, setFormData] = useState<SignupData>({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState<Record<string, string[] | undefined>>({});


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
            const res = await registerUser({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                phoneNumber: formData.phoneNumber
            });
            console.log("res", res)

            if (res.success) {
                toast.success(res.message || "Account created");
                localStorage.setItem("phoneNumber", res?.data.phoneNumber)
                localStorage.setItem("email",res?.data?.email)
                navigate('/verify-otp')

            } else {
                const apiErrors: Record<string, string[]> = {};

                res.errors?.forEach((err: ApiError) => {
                    apiErrors[err.field] = [err.message];
                });

                setErrors(apiErrors);
                toast.error(res.errors[0].message || "Something went wrong!")
            }
        } catch (error) {
            console.log("error =>", error);
        } finally {
            setIsLoading(false)
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

    console.log("errors", errors)

    return (
        <div className='bg-[#f5f5f5] p-6 min-h-screen'>
            <h2 className='mb-6 text-[#182232] font-bold'>
                <Link to="/">ShopVerse</Link> </h2>

            <div className=''>
                <h2 className='text-[#182232]'>Welcome Back</h2>
                <p className='text-[#45474C]'>Enter your details to create your premium account.</p>

                <form
                    onSubmit={handleRegister}
                    className='w-full lg:w-3/4 mx-auto flex flex-col gap-4 justify-center my-8 bg-white     rounded-lg p-6'>
                    <div className='flex gap-3'>
                        <div className='w-1/2'>
                            <FormLabel htmlFor="firstName" className='mb-2 text-[#45474C]'>First Name</FormLabel>
                            <InputField
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
                        <div className='w-1/2'>
                            <FormLabel htmlFor="lastName" className='mb-2 text-[#45474C]'>Last Name</FormLabel>
                            <InputField
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
                        <FormLabel htmlFor="email" className='mb-2 text-[#45474C]'>Email Address</FormLabel>
                        <InputField
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

                    <div className=''>
                        <FormLabel htmlFor="phoneNumber" className='text-[#45474C] mb-2'>Phone Number</FormLabel>
                            <PhoneInput
                                value={formData.phoneNumber}
                                defaultCountry="eg"
                                onChange={(phone:string)=> 
                                    setFormData((prev)=>({
                                        ...prev,
                                        phoneNumber:phone||""
                                    }))
                                }
                            //     inputClassName="
                            //     w-full
                            //     h-8
                            //     px-1
                            //     bg-white
                            //     border
                            //     border-gray-200
                            //     focus:outline-none
                            //     focus:ring-2
                            //     focus:ring-[#e1e1e1]
                            // " 
                            className="w-full"
  inputClassName="
    h-10
    border-gray-200
  "
  countrySelectorStyleProps={{
    buttonClassName: "border-gray-200"
  }}
                            />
                         {errors.phoneNumber && (
                                <p className="text-red-500 text-sm">
                                    {errors.phoneNumber[0]}
                                </p>
                            )}
                    </div>

                    <div>
                        <FormLabel htmlFor="password" className='flex items-center justify-between mb-2 text-[#45474C]'>
                            <span>Password</span>
                        </FormLabel>
                        <InputField
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
                    <div className='flex items-center gap-2 mt-2'>
                        <Checkbox className=' bg-white cursor-pointer' />
                        <span>Keep me logged in</span>
                    </div>

                    <SubmitBtn
                        disabled={isLoading}
                        type='submit'
                        className='text-white bg-[#182232] cursor-pointer'
                    >
                        {isLoading ? "Signing up..." : "Sign up to VerseShop"} </SubmitBtn>

                    <p className='text-center text-sm'> Have an account?
                        <Link className='text-[#324566]' to="/sign-in"> Sign In</Link></p>


                </form>
            </div >
        </div >
    )
}
