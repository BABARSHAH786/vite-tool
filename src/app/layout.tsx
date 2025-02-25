import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { ClerkProvider, SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {/* clerk work start */}
   <ClerkProvider>
   <header className="overflow-x-hidden flex  "  >
   <Navbar />
   <div className="ml-[-93px] mt-1   ">

     <SignedOut>
       <SignInButton />
     </SignedOut>
     <SignedIn>
       <UserButton   />
       <SignedOut />
     </SignedIn>
     </div>
   </header>
   <main>{children}</main>
 </ClerkProvider>
{/* clerk end */}
       

      



        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}










