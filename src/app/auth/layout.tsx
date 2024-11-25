import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



    export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
    };

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
        <body className='min-h-screen dark:bg-black w-full'>
            

            <div className=" col-span-12 md:col-span-10  min-h-screen  rounded-lg">
                {/*navbar*/}
                <Navbar  />
            {children}
            {/*footer*/}
            <Footer/>
            </div>

            
        </body>
        </html>
    );
}
