import type { Metadata } from "next";
import "./globals.css";
import GridContainer from "@/components/GridContainer";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className='min-h-screen w-full'>
        <GridContainer cols={12}>

          <div className=" col-span-2 bg-red-600 min-h-screen ">
Alhaaa
          </div>

          <div className=" col-span-10 bg-green-600 min-h-screen ">
          {children}
          Brooom
          </div>

        </GridContainer>
        
      </body>
    </html>
  );
}
