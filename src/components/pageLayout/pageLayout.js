import React from 'react'
import Header from "../header/header";


export default function PageLayout({children}) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}