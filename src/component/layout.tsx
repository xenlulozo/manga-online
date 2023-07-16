"use client "
import Header from "./header"
import Footer from "./footer"
import { CounterContextProvider } from "@/context/context"
export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <html lang="en">
                <body>
                    <CounterContextProvider>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </CounterContextProvider>
                </body>
            </html>


        </>
    )
}