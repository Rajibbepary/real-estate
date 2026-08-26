import React from 'react';
// import { Footer } from '@/components/footer';
import { Footer } from '../../components/footer';
import { Navbar } from '../../components/navbar';
import LenisScroll from '../../components/lenis-scroll';
import LoginWrapper from '../../components/LoginWrapper';

export const metadata = {
    title: 'estate - PrebuiltUI',
    description: 'estate is a real estate website template.',
    appleWebApp: {
        title: 'estate - PrebuiltUI',
    },
};

export default function Layout({ children }) {
    return (
        <>
            <LenisScroll />
            <LoginWrapper/>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}