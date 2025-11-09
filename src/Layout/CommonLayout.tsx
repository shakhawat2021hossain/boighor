import Footer from '@/components/Shared/Footer';
import Navbar from '@/components/Shared/Navbar';
import { Outlet } from 'react-router';

const CommonLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='grow'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default CommonLayout;