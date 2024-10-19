//src/app/[lang]/page.js
"use client"; 
import React from 'react';
import Home from './home/page';
import { useParams } from 'next/navigation'; // Import useParams

export default function Page() {
    const { lang } = useParams(); // Get the lang parameter from the URL

    return <Home lang={lang} />; // Pass lang as a prop to Home
}
