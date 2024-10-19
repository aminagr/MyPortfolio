

//src/app/[lang]/layout.js
"use client"; 

import { usePathname } from 'next/navigation';
import Navbar from '../../components/commun/Navbar';
import Footer from '../../components/commun/Footer'; 
import { useLanguage } from '../../app/context/LanguageContext';
export default function Layout({ children }) {
    const pathname = usePathname();
    const lang = pathname.split('/')[1] || 'en'; // Vérifiez que vous récupérez bien la langue

    return (
        <div className='container'>
            <Navbar lang={lang} />
            <main>
                {children} 
            </main>
            <Footer lang={lang} /> 
        </div>
    );
}
