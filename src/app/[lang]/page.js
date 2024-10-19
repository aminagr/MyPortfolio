//src/app/[lang]/page.js
"use client"; 
import React from 'react';
import Home from './home/page';
import { useParams } from 'next/navigation'; 
export default function Page() {
    const { lang } = useParams(); 

    return <Home lang={lang} />; 
}
