import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const featuredDebates = [
    {
        id: "1",
        title: "Are social media algorithms making us dumber or smarter?",
        description:
            "Personalized feeds serve us more of what we like — but is it helping us learn or keeping us in echo chambers?.",
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
        title: "India vs Pakistan: Is Peace a Dream or a Dangerous Illusion?",
        description: "This debate challenges us to confront a hard truth: Can diplomatic talks still build bridges, or are they just a mirage in a battlefield of ideology, history...",
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
        title: "Should influencers be legally responsible for promoting harmful content?",
        description:
            "When influencers promote scams, unhealthy products, or fake news, should they be fined or jailed?",
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
            <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-background z-0"></div>
                <div className="mx-4 sm:mx-6 md:mx-10 relative z-10">
                    <div className="grid gap-10 md:grid-cols-2">
                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <Badge className="mb-4" variant="outline">
                                    Platform Launch 2025
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl">
                                    Where <span className="text-primary">Ideas</span> Clash{" "}
                                    and <span className="text-primary">Minds </span>Connect
                                </h1>
                            </div>
                            <p className="max-w-[600px] text-muted-foreground text-base sm:text-lg md:text-xl">
                                Join our community of critical thinkers. Engage in structured debates, challenge perspectives, and
                                expand your understanding on topics that matter.
                            </p>
                            <div className="flex flex-col gap-3 min-[400px]:flex-row">
                                <Link href="/dashboard">
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
                        <div className="flex items-center justify-center mt-8 md:mt-0">
                            <div className="relative h-[260px] w-full max-w-xs sm:h-[320px] sm:max-w-sm md:h-[400px] md:w-[400px] rounded-lg bg-gradient-to-br from-purple-500 to-blue-700 p-1">
                                <div className="absolute inset-0 rounded-lg bg-background/95 p-4 sm:p-6 flex flex-col justify-center">
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
            <section className="py-12 sm:py-16 bg-secondary/20">
                <div className="mx-4 sm:mx-6 md:mx-10">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row mb-8 md:mb-10">
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Debates</h2>
                            <p className="text-muted-foreground text-sm sm:text-base">Join these popular discussions happening now</p>
                        </div>
                        <Link href="/dashboard">
                            <Button variant="outline">View All Debates</Button>
                        </Link>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {featuredDebates.map((debate) => (
                            <Card key={debate.id} className="overflow-hidden transition-all hover:shadow-lg">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start">
                                        <Badge variant="outline" className="mb-2">
                                            {debate.category}
                                        </Badge>
                                        <span className="text-sm text-muted-foreground">{debate.createdAt}</span>
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl">
                                        <Link href={`/dashboard`} className="hover:text-primary transition-colors">
                                            {debate.title}
                                        </Link>
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">{debate.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
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
                                    <Link href={`/dashboard`}>
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

            {/* Stats Section */}
            <section className="py-12 sm:py-16 bg-secondary/20">
                <div className="mx-4 sm:mx-6 md:mx-10">
                    <div className="text-center mb-8 md:mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Growing Community</h2>
                        <p className="text-muted-foreground mt-2 text-sm sm:text-base">Join thousands of members engaging in meaningful discourse</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                                <p className="text-muted-foreground text-sm sm:text-base">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0"></div>
                <div className="mx-4 sm:mx-6 md:mx-10 relative z-10">
                    <div className="mx-auto max-w-xl sm:max-w-2xl text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">Ready to join the conversation?</h2>
                        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                            Create an account today and start engaging in meaningful debates with our community.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/auth">
                                <Button size="lg" className="w-full sm:w-auto">Create Account</Button>
                            </Link>
                            <Link href="/debates">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
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
