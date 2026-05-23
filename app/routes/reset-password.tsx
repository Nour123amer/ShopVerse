import React, { useState } from 'react'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';

export default function ResetPassword() {
    const [newPass, setNewPass]= useState("");

    const handleResetPassword = async (e:React.FormEvent)=>{
        e.preventDefault();
        if(newPass !==""){
            try{
                const result = await fetch("/api/auth/reset-password",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({
                          token: "4f1d2f7cf6f6a6c23db1d7210c8f40f2d9dbe8f4ad44f1f71e6e9b6b9ad6af8e",
                        newPassword:`${newPass}`
                    })
                });

                const data = await result.json();
                console.log("reset pass =>", data)

            }catch(error){
                console.log(error)
            }
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
                            <Label className='mb-2 text-[#45474C]'>New Password</Label>
                            <Input
                                value={newPass}
                                onChange={(e) => { setNewPass(e.target.value) }}
                                className='mb-3 bg-white text-[#C5C6CD]' name="email" type='email' placeholder="Alex@gmail.com" />
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
