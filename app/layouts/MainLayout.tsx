
import { Outlet } from 'react-router'
import Footer from '~/components/home/Footer'
import Navbar from '~/components/home/Navbar'

export default function MainLayout() {
    return (
        <>
            <div className='min-h-screen'>
                <Navbar />
                <main className='px-4 md:px-8 bg-[#f5f5f5] py-6'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}
