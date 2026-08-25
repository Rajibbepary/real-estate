import React from 'react';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import LenisScroll from '@/components/lenis-scroll';
//import Login from '@/components/login';

export const metadata = {
    title: 'estate - PrebuiltUI',
    description: 'estate is a real estate website template.',
    appleWebApp: {
        title: 'estate - PrebuiltUI',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <LenisScroll />
            {/* <Login/> */}
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
