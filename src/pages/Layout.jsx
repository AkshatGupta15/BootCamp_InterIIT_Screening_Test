import React from 'react';
import Sidebar from '../components/sidebar';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <div className='flex h-screen'>
            <div className='w-[200px] bg-white min-h-screen'><Sidebar /></div>
            <div className='w-full bg-bg_light'>
                <Navbar />
                <main className='w-full'>
                    {children}
                </main>
            </div>
            </div>
            
            {/* Add your footer component here */}
            <footer>
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default Layout;