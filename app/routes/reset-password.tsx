import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { toast } from 'sonner';
import resetPassword, { refreshToken, resetPassValidation } from '~/services/auth.service';
import SubmitBtn from '~/components/form/SubmitBtn';


export default function ResetPassword() {
    const [newPass, setNewPass] = useState("");
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const navigate = useNavigate();

    const handleResetPassword = async (e: React.FormEvent) => {
        console.log("FORM SUBMIT FIRED");
        e.preventDefault();
           const storedToken = localStorage.getItem("resetToken") || "";

        const resetvalidationResult = resetPassValidation.safeParse({newPass})
        if (!resetvalidationResult.success) {
              console.log(resetvalidationResult.error.flatten());

            setErrors(
                resetvalidationResult.error.flatten().fieldErrors
            );
            return;
        }
        try {
           const res = await resetPassword({
            token: storedToken,
            newPassword: newPass
           })
            if(res.ok){
                setTimeout(() => {
                    navigate("/sign-in") 
                }, 4000);
              toast.success("password is changed successfully!")
            }else{
                console.log(res)
            }
            console.log( "result",res)

            if (!res.ok) {
                const storedRefreshToken = localStorage.getItem("refreshToken") || "";
               const result =  await refreshToken({
                refreshToken: storedRefreshToken 
               });
               const refreshResult = await result.json();
               console.log("refreshResult",refreshResult)

            }

        } catch (error) {
            console.log("error ==>",error)
            toast.error("Something went wrong!")
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
                        onSubmit={handleResetPassword}
                        className='w-full lg:w-1/2 mx-auto flex flex-col justify-center my-8 bg-white     rounded-lg p-6'>
                        <div>
                            <Label htmlFor='password' className='mb-2 text-[#45474C]'>New Password</Label>
                            <Input
                            id='password'
                                value={newPass}
                                onChange={(e) => { setNewPass(e.target.value) }}
                                className='mb-3 bg-white text-[#C5C6CD]' name="password" type='password' placeholder="********" />
                            {errors.newPass && (
                                <p className="text-red-500 text-sm">
                                    {errors.newPass[0]}
                                </p>
                            )}
                        </div>

                        <SubmitBtn
                            type='submit'
                            className='text-white bg-[#182232] cursor-pointer'
                        >Reset Password</SubmitBtn>

                        <p className='text-center my-4'> Don't have an account?
                            <Link className='text-[#182232]' to="/sign-up"> Create Account</Link></p>


                    </form>
                </div>
            </div>
        </>
    )
}
