import { Link } from 'react-router'
import { Button } from '~/components/ui/button'
import { Checkbox } from '~/components/ui/checkbox'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Signup() {
  return (
    <div className='bg-[#f5f5f5] p-6 min-h-screen'>
                <h2 className='mb-6 text-[#182232] font-bold'>ShopVerse</h2>

                <div className=''>
                    <h2 className='text-[#182232]'>Welcome Back</h2>
                    <p className='text-[#45474C]'>Enter your details to create your premium account.</p>

                    <form className='w-full lg:w-1/2 mx-auto flex flex-col justify-center my-8 bg-white     rounded-lg p-6'>
                         <div>
                            <Label className='mb-2 text-[#45474C]'>Full Name</Label>
                            <Input className='mb-3 bg-white text-[#C5C6CD]' name="name" type='name' placeholder="John Alex" />
                        </div>
                        
                        <div>
                            <Label className='mb-2 text-[#45474C]'>Email Address</Label>
                            <Input className='mb-3 bg-white text-[#C5C6CD]' name="email" type='email' placeholder="Alex@gmail.com" />
                        </div>
                        <div>
                            <Label className='flex items-center justify-between mb-2 text-[#45474C]'>
                                <span>Password</span>
                                <span>Forgot?</span>
                            </Label>
                            <Input className='mb-3 bg-white text-[#C5C6CD] ' name='password' type='password' placeholder='***********' />

                        </div>
                        <div className='flex items-center gap-2 my-3'>
                            <Checkbox className=' bg-white cursor-pointer' />
                            <span>Keep me logged in</span>
                        </div>

                        <Button
                            className='text-white bg-[#182232] cursor-pointer'
                        >Sign up to VerseShop</Button>

                        <p className='text-center my-4'> Have an account?
                            <Link className='text-[#182232]' to="/sign-in"> Sign In</Link></p>


                    </form>
                </div>
            </div>
  )
}
