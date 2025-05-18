import Link from "next/link"
export default function Footer() {
    return (
        <div>
            <footer className="border-t border-border/40 bg-secondary/20">
                <div className="mx-10 py-8">
                    <div className="grid gap-8 md:grid-cols-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">DebateHub</h3>
                            <p className="text-sm text-muted-foreground">
                                A platform for structured debates and meaningful discourse on topics that matter.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/" className="text-muted-foreground hover:text-foreground">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
                                        Debates
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/categories" className="text-muted-foreground hover:text-foreground">
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-muted-foreground hover:text-foreground">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Account</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/auth" className="text-muted-foreground hover:text-foreground">
                                        Sign Up
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profile" className="text-muted-foreground hover:text-foreground">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/settings" className="text-muted-foreground hover:text-foreground">
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/guidelines" className="text-muted-foreground hover:text-foreground">
                                        Community Guidelines
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                        <p>Created By <span className="font-bold text-white">Sahal Belam</span></p>
                        <p>© {new Date().getFullYear()} DebateHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}