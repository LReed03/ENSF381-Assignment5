import React from 'react';
import Header from './Header';
import MainSection from './MainSection';
import Footer from './Footer';
import { createContext } from 'react';

export const StudentContext = createContext();

function Homepage() {
    return (
        <div>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default Homepage;