import React from 'react'
import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Signin() {
  return (
    <>
    <div className='bg-[#f5f5f5] p-6 min-h-screen'>
        <h2 className='mb-6 text-[#182232]'>ShopVerse</h2>

        <div className=''>
            <h2 className='text-[#182232]'>Welcome Back</h2>
            <p className='text-[#182232]'>Enter your details to access your premium account.</p>

            <form className='w-full lg:w-1/2 mx-auto flex flex-col justify-center my-14  bg-white 
            rounded-lg p-6'>
                <Label className='mb-2'>Email Address</Label>
                <Input className='mb-3 bg-white' name="email" type='email' placeholder="Alex@gmail.com" />

                <Label  className='flex items-center justify-between mb-2'>
                    <span>Password</span>
                    <span>Forgot?</span>
                </Label>
                <Input className='mb-3 bg-white ' name='password' type='password' placeholder='***********' />

                <div className='flex items-center gap-2 my-3'>
                   <Checkbox className=' bg-white cursor-pointer' /> 
                   <span>Keep me logged in</span>
                </div>

                <Button
                className='text-white bg-[#182232] cursor-pointer'
                >Sign in to VerseShop</Button>

                <p className='text-center my-4'> Don't have an account?
                     <Link className='text-[#182232]' to="/sign-up"> Create Account</Link></p>
                

            </form>
        </div>
    </div>
    </>
  )
}
