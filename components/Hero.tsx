import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const featuredDebates = [
    {
        id: "1",
        title: "Should AI development be regulated?",
        description:
            "Discussing the ethical implications and potential regulations for artificial intelligence development.",
        category: "Technology",
        participants: 42,
        comments: 128,
        author: {
            name: "Alex Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "AJ",
        },
        createdAt: "2 days ago",
    },
    {
        id: "2",
        title: "Is remote work the future of employment?",
        description: "Exploring the benefits and challenges of remote work and its impact on the future workforce.",
        category: "Business",
        participants: 37,
        comments: 95,
        author: {
            name: "Sam Rivera",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "SR",
        },
        createdAt: "5 days ago",
    },
    {
        id: "3",
        title: "Climate change: Individual vs corporate responsibility",
        description:
            "Debating the balance of responsibility between individuals and corporations in addressing climate change.",
        category: "Environment",
        participants: 56,
        comments: 203,
        author: {
            name: "Jamie Lee",
            avatar: "/placeholder.svg?height=40&width=40",
            initials: "JL",
        },
        createdAt: "1 week ago",
    },
]

// Mock data for debate categories
const categories = [
    { name: "Politics", count: 124, color: "bg-red-500" },
    { name: "Technology", count: 98, color: "bg-blue-500" },
    { name: "Science", count: 87, color: "bg-green-500" },
    { name: "Philosophy", count: 76, color: "bg-yellow-500" },
    { name: "Economics", count: 65, color: "bg-purple-500" },
    { name: "Environment", count: 54, color: "bg-teal-500" },
    { name: "Education", count: 43, color: "bg-orange-500" },
    { name: "Health", count: 32, color: "bg-pink-500" },
]

// Mock statistics
const stats = [
    { label: "Active Debates", value: "1,200+" },
    { label: "Community Members", value: "25,000+" },
    { label: "Daily Contributions", value: "500+" },
    { label: "Topics Covered", value: "100+" },
]

export default function Hero() {
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-background z-0"></div>
                <div className="mx-10 relative z-10">
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <Badge className="mb-4" variant="outline">
                                    Platform Launch 2025
                                </Badge>
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                    Where <span className="text-primary">Ideas</span> Clash {" "}
                                    and <span className="text-primary">Minds </span>Connect
                                </h1>
                            </div>
                            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl">
                                Join our community of critical thinkers. Engage in structured debates, challenge perspectives, and
                                expand your understanding on topics that matter.
                            </p>
                            <div className="flex flex-col gap-3 min-[400px]:flex-row">
                                <Link href="/debates">
                                    <Button size="lg" className="w-full min-[400px]:w-auto">
                                        Explore Debates
                                    </Button>
                                </Link>
                                <Link href="/auth">
                                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                                        Create Account
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="relative h-[400px] w-[400px] rounded-lg bg-gradient-to-br from-purple-500 to-blue-700 p-1">
                                <div className="absolute inset-0 rounded-lg bg-background/95 p-6 flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                                                A
                                            </div>
                                            <div className="space-y-2 flex-1">
                                                <div className="h-4 w-3/4 rounded bg-muted"></div>
                                                <div className="h-4 w-full rounded bg-muted"></div>
                                                <div className="h-4 w-2/3 rounded bg-muted"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                                B
                                            </div>
                                            <div className="space-y-2 flex-1">
                                                <div className="h-4 w-full rounded bg-muted"></div>
                                                <div className="h-4 w-3/4 rounded bg-muted"></div>
                                                <div className="h-4 w-1/2 rounded bg-muted"></div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                                                C
                                            </div>
                                            <div className="space-y-2 flex-1">
                                                <div className="h-4 w-2/3 rounded bg-muted"></div>
                                                <div className="h-4 w-full rounded bg-muted"></div>
                                                <div className="h-4 w-3/4 rounded bg-muted"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Debates Section */}
            <section className="py-16 bg-secondary/20">
                <div className="mx-10">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-10">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight">Featured Debates</h2>
                            <p className="text-muted-foreground">Join these popular discussions happening now</p>
                        </div>
                        <Link href="/debates">
                            <Button variant="outline">View All Debates</Button>
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {featuredDebates.map((debate) => (
                            <Card key={debate.id} className="overflow-hidden transition-all hover:shadow-lg">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start">
                                        <Badge variant="outline" className="mb-2">
                                            {debate.category}
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">{debate.createdAt}</span>
                                    </div>
                                    <CardTitle className="text-xl">
                                        <Link href={`/debates/${debate.id}`} className="hover:text-primary transition-colors">
                                            {debate.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">{debate.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span>{debate.participants} participants</span>
                                        <span>•</span>
                                        <span>{debate.comments} comments</span>
                                    </div>
                                </CardContent>
                                <CardFooter className="border-t pt-3 flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={debate.author.avatar || "/placeholder.svg"} alt={debate.author.name} />
                                            <AvatarFallback>{debate.author.initials}</AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm font-medium">{debate.author.name}</span>
                                    </div>
                                    <Link href={`/debates/${debate.id}`}>
                                        <Button variant="ghost" size="sm">
                                            Join Debate
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16">
                <div className="mx-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold tracking-tight">Explore by Category</h2>
                        <p className="text-muted-foreground mt-2">Find debates on topics that interest you</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((category) => (
                            <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`} className="group">
                                <div className="relative overflow-hidden rounded-lg border p-6 transition-all hover:shadow-md group-hover:border-primary">
                                    <div
                                        className={`absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-20 ${category.color}`}
                                    ></div>
                                    <h3 className="text-xl font-semibold">{category.name}</h3>
                                    <p className="text-muted-foreground">{category.count} debates</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-secondary/20">
                <div className="mx-10">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold tracking-tight">Our Growing Community</h2>
                        <p className="text-muted-foreground mt-2">Join thousands of members engaging in meaningful discourse</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                                <p className="text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0"></div>
                <div className="mx-10 relative z-10">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to join the conversation?</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Create an account today and start engaging in meaningful debates with our community.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/auth">
                                <Button size="lg">Create Account</Button>
                            </Link>
                            <Link href="/debates">
                                <Button size="lg" variant="outline">
                                    Browse Debates
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}