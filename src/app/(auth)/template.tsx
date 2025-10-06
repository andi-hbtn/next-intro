"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {

    const navLinks = [
        { name: "Register", href: "/register", },
        { name: "Forgot-Password", href: "/forgot-password" },
        { name: "Login", href: "/login" }
    ]
    const pathname = usePathname();
    const [input, setInput] = useState("");

    return (
        <>
            <div>
                <div>
                    <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
                </div>
                <ul>
                    {
                        navLinks.map((link, index) => {
                            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                            return (
                                <li key={index}>
                                    <Link href={link.href} className={isActive ? "font-bold" : "text-blue"}>{link.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                {children}
                <footer>footer of Auth</footer>
            </div>
        </>
    )
}