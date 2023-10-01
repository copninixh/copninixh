"use client"
import { ThemeProvider } from "next-themes"
import React, { ReactNode } from 'react';


interface ProvidersProps {
    children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) =>{
    return <ThemeProvider>{children}</ThemeProvider>
}

export default Providers