import type React from "react"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Award, Shield, Clock, Lightbulb, ThumbsUp, Scale } from "lucide-react"

export const metadata: Metadata = {
    title: "About | DebateHub",
    description: "Learn about DebateHub, our mission, and how our platform works",
}

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-10 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                    </nav>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-28">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-background z-0"></div>
                    <div className="mx-10 relative z-10 text-center">
                        <Badge className="mb-4">About DebateHub</Badge>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                            Fostering <span className="text-primary">Thoughtful</span> Discourse
                        </h1>
                        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                            DebateHub is a platform dedicated to promoting civil, structured, and productive debates on topics that
                            matter. We believe in the power of respectful dialogue to broaden perspectives and deepen understanding.
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-16 bg-secondary/20">
                    <div className="mx-10">
                        <div className="grid gap-10 md:grid-cols-2 items-center">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Mission</h2>
                                <p className="text-muted-foreground mb-4">
                                    In an era of polarization and echo chambers, DebateHub aims to create a space where people with
                                    different viewpoints can engage in meaningful, evidence-based discussions.
                                </p>
                                <p className="text-muted-foreground mb-4">
                                    We believe that exposure to diverse perspectives is essential for personal growth and societal
                                    progress. By facilitating structured debates, we help participants and observers develop a more
                                    nuanced understanding of complex issues.
                                </p>
                                <p className="text-muted-foreground">
                                    Our platform is designed to encourage critical thinking, empathy, and intellectual honesty—skills that
                                    are vital for navigating our increasingly complex world.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-md aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-blue-700 p-1">
                                    <div className="absolute inset-0 rounded-lg bg-background/95 p-8 flex flex-col justify-center items-center text-center">
                                        <Scale className="h-16 w-16 text-primary mb-6" />
                                        <h3 className="text-2xl font-bold mb-2">Balanced Perspectives</h3>
                                        <p className="text-muted-foreground">
                                            We provide a platform where both sides of an argument receive equal opportunity to present their
                                            case, ensuring balanced discourse.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-16">
                    <div className="mx-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight">How DebateHub Works</h2>
                            <p className="text-muted-foreground mt-2 mx-auto max-w-[700px]">
                                Our platform is designed to facilitate structured, productive debates through a simple process
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            <Card className="bg-background border-border/40">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                        <MessageSquare className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Join or Create a Debate</CardTitle>
                                    <CardDescription>
                                        Browse existing debates on topics that interest you or create your own to start a discussion.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Choose from a wide range of categories</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Set debate format and duration</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Invite specific participants or open to all</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="bg-background border-border/40">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                        <Scale className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Take a Stance</CardTitle>
                                    <CardDescription>
                                        Clearly indicate whether you're arguing for (Pro) or against (Con) the topic being debated.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Pro and Con sides are visually distinguished</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Switch sides if your view changes</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Remain undecided to ask questions</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="bg-background border-border/40">
                                <CardHeader className="pb-2">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                        <Lightbulb className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>Engage and Learn</CardTitle>
                                    <CardDescription>
                                        Present your arguments, respond to others, and gain insights from different perspectives.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Support arguments with evidence</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Receive feedback from other participants</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="rounded-full bg-primary/20 p-1 mt-0.5">
                                                <ThumbsUp className="h-3 w-3 text-primary" />
                                            </span>
                                            <span>Review debate summaries and insights</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-secondary/20">
                    <div className="mx-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight">Platform Features</h2>
                            <p className="text-muted-foreground mt-2 mx-auto max-w-[700px]">
                                DebateHub offers a range of features designed to facilitate meaningful discourse
                            </p>
                        </div>

                        <Tabs defaultValue="structure" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 mb-8">
                                <TabsTrigger value="structure">Structure</TabsTrigger>
                                <TabsTrigger value="community">Community</TabsTrigger>
                                <TabsTrigger value="moderation">Moderation</TabsTrigger>
                                <TabsTrigger value="learning">Learning</TabsTrigger>
                            </TabsList>
                            <TabsContent value="structure" className="mt-0">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <FeatureCard
                                        icon={<MessageSquare className="h-6 w-6 text-primary" />}
                                        title="Organized Debate Rooms"
                                        description="Dedicated spaces for each topic with clear Pro and Con sides to keep discussions focused and productive."
                                    />
                                    <FeatureCard
                                        icon={<Clock className="h-6 w-6 text-primary" />}
                                        title="Timed Debates"
                                        description="Set time limits for debates to ensure concise arguments and maintain participant engagement."
                                    />
                                    <FeatureCard
                                        icon={<Scale className="h-6 w-6 text-primary" />}
                                        title="Balanced Format"
                                        description="Equal opportunity for both sides to present their case, with tools to ensure fair participation."
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent value="community" className="mt-0">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <FeatureCard
                                        icon={<Users className="h-6 w-6 text-primary" />}
                                        title="Diverse Community"
                                        description="Connect with people from various backgrounds and perspectives to broaden your understanding."
                                    />
                                    <FeatureCard
                                        icon={<Award className="h-6 w-6 text-primary" />}
                                        title="Recognition System"
                                        description="Earn badges and reputation for constructive contributions and well-reasoned arguments."
                                    />
                                    <FeatureCard
                                        icon={<MessageSquare className="h-6 w-6 text-primary" />}
                                        title="Private Messaging"
                                        description="Continue discussions one-on-one or form groups to explore topics in more depth."
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent value="moderation" className="mt-0">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <FeatureCard
                                        icon={<Shield className="h-6 w-6 text-primary" />}
                                        title="Community Guidelines"
                                        description="Clear standards for respectful discourse that all participants are expected to follow."
                                    />
                                    <FeatureCard
                                        icon={<Users className="h-6 w-6 text-primary" />}
                                        title="Experienced Moderators"
                                        description="Trained moderators ensure debates remain civil and productive, intervening when necessary."
                                    />
                                    <FeatureCard
                                        icon={<ThumbsUp className="h-6 w-6 text-primary" />}
                                        title="Feedback System"
                                        description="Report violations or provide feedback to help improve the platform and community."
                                    />
                                </div>
                            </TabsContent>
                            <TabsContent value="learning" className="mt-0">
                                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                    <FeatureCard
                                        icon={<Lightbulb className="h-6 w-6 text-primary" />}
                                        title="Debate Summaries"
                                        description="Review key points and insights from debates to solidify your understanding."
                                    />
                                    <FeatureCard
                                        icon={<Award className="h-6 w-6 text-primary" />}
                                        title="Skill Development"
                                        description="Improve your critical thinking, argumentation, and communication skills through practice."
                                    />
                                    <FeatureCard
                                        icon={<MessageSquare className="h-6 w-6 text-primary" />}
                                        title="Resource Sharing"
                                        description="Share articles, studies, and other resources to support your arguments and educate others."
                                    />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Community Guidelines Section */}
                <section className="py-16">
                    <div className="mx-10">
                        <div className="grid gap-10 md:grid-cols-2 items-start">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-6">Community Guidelines</h2>
                                <p className="text-muted-foreground mb-6">
                                    At DebateHub, we're committed to maintaining a respectful environment where diverse viewpoints can be
                                    expressed and explored. Our community guidelines are designed to foster productive discourse while
                                    ensuring all participants feel safe and valued.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-primary/20 p-2 mt-1">
                                            <Shield className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Respect All Participants</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Treat others with dignity and respect, even when you strongly disagree with their views.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-primary/20 p-2 mt-1">
                                            <MessageSquare className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Focus on Arguments, Not Individuals</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Challenge ideas rather than attacking the people who hold them. Avoid personal attacks and ad
                                                hominem arguments.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="rounded-full bg-primary/20 p-2 mt-1">
                                            <Lightbulb className="h-4 w-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Support Claims with Evidence</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Back up your arguments with credible sources and evidence whenever possible.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link href="/guidelines">
                                        <Button variant="outline">Read Full Guidelines</Button>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>How do I start a debate?</AccordionTrigger>
                                        <AccordionContent>
                                            To start a debate, navigate to the Debates page and click the "Create Room" button. You'll be
                                            prompted to enter a title, description, and category for your debate. You can also set the format
                                            and duration. Once created, you can share the link with others or wait for participants to join.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Can I change my stance during a debate?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes, you can change your stance at any time during a debate. Simply use the Pro/Con toggle when
                                            posting a new message. This flexibility allows your position to evolve as you engage with new
                                            information and perspectives.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>How are debates moderated?</AccordionTrigger>
                                        <AccordionContent>
                                            Debates are primarily moderated by our community guidelines and reporting system. For larger or
                                            more sensitive topics, we may assign dedicated moderators to ensure the discussion remains
                                            productive and respectful. Participants can report violations, and our team reviews these reports
                                            promptly.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>Is DebateHub free to use?</AccordionTrigger>
                                        <AccordionContent>
                                            DebateHub offers a free tier that includes access to public debates and basic features. We also
                                            offer a premium subscription that provides additional features such as private debate rooms,
                                            advanced analytics, and priority support. Educational institutions may qualify for special
                                            pricing.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-5">
                                        <AccordionTrigger>How can I suggest a new feature?</AccordionTrigger>
                                        <AccordionContent>
                                            We welcome feature suggestions from our community! You can submit ideas through the Feedback form
                                            in your account settings or email them directly to feedback@debatehub.example.com. Our team
                                            regularly reviews suggestions and incorporates them into our development roadmap.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-secondary/20">
                    <div className="mx-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight">Our Team</h2>
                            <p className="text-muted-foreground mt-2 mx-auto max-w-[700px]">
                                DebateHub was founded by a diverse group of individuals passionate about fostering meaningful discourse
                            </p>
                        </div>

                        <div className="grid">
                            <TeamMember
                                name="Sahal Belam"
                                role="Founder & CEO"
                                bio="Former debate champion with a background in philosophy and technology. Passionate about creating spaces for productive discourse."
                                avatar="/placeholder.svg?height=200&width=200"
                                initials="AJ"
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background z-0"></div>
                    <div className="mx-10 relative z-10">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Join Our Community Today</h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Become part of a growing community dedicated to thoughtful discourse and mutual understanding.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/auth">
                                    <Button size="lg">Create Account</Button>
                                </Link>
                                <Link href="/dashboard">
                                    <Button size="lg" variant="outline">
                                        Explore Debates
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

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
                                    <Link href="/debates" className="text-muted-foreground hover:text-foreground">
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
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="text-muted-foreground hover:text-foreground">
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-muted-foreground hover:text-foreground">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-muted-foreground hover:text-foreground">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-muted-foreground hover:text-foreground">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} DebateHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

interface FeatureCardProps {
    icon: React.ReactNode
    title: string
    description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <Card className="bg-background border-border/40">
            <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">{icon}</div>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}

interface TeamMemberProps {
    name: string
    role: string
    bio: string
    avatar: string
    initials: string
}

function TeamMember({ name, role, bio, avatar, initials }: TeamMemberProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 p-1 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center">
                    <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
                </div>
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-primary text-sm mb-2">{role}</p>
            <p className="text-sm text-muted-foreground">{bio}</p>
        </div>
    )
}

interface ContactCardProps {
    title: string
    description: string
    contact: string
}

function ContactCard({ title, description, contact }: ContactCardProps) {
    return (
        <Card className="bg-background border-border/40">
            <CardHeader>
                <CardTitle className="text-center">{title}</CardTitle>
                <CardDescription className="text-center">{description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-primary">{contact}</p>
            </CardContent>
        </Card>
    )
}
