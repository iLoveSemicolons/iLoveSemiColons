import React from 'react'
import Header from "../header/header";


export default function PageLayout({children}) {
    return (
        <div>
            <a href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet"></a>
            <Header />
            {children}
        </div>
    );
}