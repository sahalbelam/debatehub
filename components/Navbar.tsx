'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    return (
        <header className="top-0 z-10 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-10 flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold">DebateHub</span>
                </Link>
                <nav className="flex items-center gap-4">
                    <Link href="/debates">
                        <Button variant="ghost">Debates</Button>
                    </Link>
                    <Link href="/categories">
                        <Button variant="ghost">Categories</Button>
                    </Link>
                    <Link href="/about">
                        <Button variant="ghost">About</Button>
                    </Link>
                    <Link href="/auth">
                        <Button>Sign Up</Button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}