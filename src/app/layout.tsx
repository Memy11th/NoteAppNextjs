import type { Metadata } from "next";
import "./globals.css";
import GridContainer from "@/components/GridContainer";
import Sidenav from "@/components/Sidenav";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className='min-h-screen w-full'>
        <GridContainer cols={12}>

            {/*Sidenav component */}
            <Sidenav />

          <div className=" col-span-12 md:col-span-10 bg-green-600 min-h-screen ">
            {/*navbar*/}
          {children}
          {/*footer*/}
          </div>

        </GridContainer>
        
      </body>
    </html>
  );
}
