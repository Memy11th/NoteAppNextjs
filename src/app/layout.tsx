import type { Metadata } from "next";
import "./globals.css";
import GridContainer from "@/components/GridContainer";
import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar";
import ThemeProv from "@/Providers/ThemeProvider";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ActionButton from "@/components/AddNote";

export const metadata: Metadata = {
  title: "Notes by M11",
  description: "Notes at it's finest",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className='min-h-screen w-full dark:bg-black'>
        <AppRouterCacheProvider>
        <ThemeProv>
          
        <GridContainer cols={12}>

            {/*Sidenav component */}
            <Sidenav />

          <div className=" col-span-12 md:col-span-10  min-h-screen  rounded-lg">
          <ProgressBar/>
            {/*navbar*/}
            <Navbar  />
          {children}
          {/*footer*/}
          <ActionButton/>
          <Footer/>
          </div>

        </GridContainer>
        </ThemeProv>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
