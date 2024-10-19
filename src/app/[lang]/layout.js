

//src/app/[lang]/layout.js
"use client"; // Make sure this is a client component

import { usePathname } from 'next/navigation';
import Navbar from '../../components/commun/Navbar';
import Footer from '../../components/commun/Footer'; // Importer le composant Footer

export default function Layout({ children }) {
    const pathname = usePathname();
    const lang = pathname.split('/')[1] || 'en'; // Extract language from the path

    return (
        <div className='container'>
            <Navbar lang={lang} />
         
            <main>
                {children} {/* Render the content from page.js */}
            </main>
            <Footer lang={lang} /> {/* Ajouter le Footer ici */}
        </div>
    );
}
