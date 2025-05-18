'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase"; 
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [isSignin, setIsSignin] = useState(false); 
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

    return (
        <header className="top-0 z-10 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-10 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold">DebateHub</span>
                </Link>
                <nav className="flex items-center gap-4">
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
        </header>
    );
}
