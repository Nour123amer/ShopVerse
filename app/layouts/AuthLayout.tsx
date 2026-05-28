
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

export default function AuthLayout() {
    return (
        <>
            <div className='min-h-screen flex '>
                {/* left side */}
                <div className='w-full md:w-1/2 sign-left-side relative hidden lg:block'>
                <div className='absolute left-6 bottom-10 text-white'>
                    <h2 className='text-xl mb-4'>Elevate your everyday with
                        ShopVerse.</h2>
                    <p className='w-full lg:w-7/12 text-sm'>Experience a curated collection of premium
                        essentials designed for the modern lifestyle.</p>
                </div>
                </div>


                {/* right side */}
                <div className='w-full md:w-1/2'>
                    <Outlet />
                </div>
                <Toaster
                 position={'top-right'} duration={4000} />

            </div>
        </>
    )
}
