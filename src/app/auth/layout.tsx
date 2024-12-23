import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';



    export const metadata: Metadata = {
    title:"Auth",
    description: "Generated by create next app",
    };

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
        <body className='min-h-screen dark:bg-black w-full'>
            
            <AppRouterCacheProvider>
            <div className=" col-span-12 md:col-span-10  min-h-screen  rounded-lg">
                {/*navbar*/}
                <Navbar  />
            {children}
            {/*footer*/}
            <Footer/>
            </div>

        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
