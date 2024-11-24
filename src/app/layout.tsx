import type { Metadata } from "next";
import "./globals.css";
import GridContainer from "@/components/GridContainer";
import Sidenav from "@/components/Sidenav";
import Navbar from "@/components/Navbar";
import ThemeProv from "@/Providers/ThemeProvider";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className='min-h-screen w-full'>
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
          <Footer/>
          </div>

        </GridContainer>
        </ThemeProv>
      </body>
    </html>
  );
}
