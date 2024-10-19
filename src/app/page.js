"use client";
// src/app/page.js

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();

    useEffect(() => {
        const path = window.location.pathname.split('/')[1]; 
        const browserLang = navigator.language.split('-')[0];
        const defaultLang = browserLang === 'fr' || browserLang === 'en' ? browserLang : 'en';


        if (!path || (path !== 'fr' && path !== 'en')) {
            router.push(`/${defaultLang}`);
        }
    }, [router]);

    return null; 
}
