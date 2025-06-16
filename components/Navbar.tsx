'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isSignin, setIsSignin] = useState(false); 
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsSignin(!!user);
        });

        return () => unsubscribe();
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error("Sign out error:", error);
        }
    };

    const handleMenuToggle = () => setMenuOpen((prev) => !prev);

    return (
        <header className="top-0 z-10 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-4 md:mx-10 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold">DebateHub</span>
                </Link>
                {/* Hamburger for mobile */}
                <button
                    className="md:hidden p-2 rounded focus:outline-none"
                    onClick={handleMenuToggle}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-4">
                    <Link href="/dashboard">
                        <Button variant="ghost">Debates</Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost">About</Button>
                    </Link>
                    {isSignin ? (
                        <Button onClick={handleSignOut}>Sign Out</Button>
                    ) : (
                        <Link href="/auth">
                            <Button>Sign Up</Button>
                        </Link>
                    )}
                </nav>
            </div>
            {/* Mobile nav */}
            {menuOpen && (
                <nav className="md:hidden bg-background border-t border-border/40 px-4 pb-4">
                    <div className="flex flex-col gap-2 mt-2">
                        <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start">Debates</Button>
                        </Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start">About</Button>
                        </Link>
                        {isSignin ? (
                            <Button onClick={() => { handleSignOut(); setMenuOpen(false); }} className="w-full justify-start">
                                Sign Out
                            </Button>
                        ) : (
                            <Link href="/auth" onClick={() => setMenuOpen(false)}>
                                <Button className="w-full justify-start">Sign Up</Button>
                            </Link>
                        )}
                    </div>
                </nav>
            )}
        </header>
    );
}
