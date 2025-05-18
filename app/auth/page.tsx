'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FcGoogle } from "react-icons/fc"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase"
import { useRouter } from "next/navigation"

const provider = new GoogleAuthProvider();

export default function SignUpPage() {
  const router = useRouter()

  const handleSignup = async () => {
    try {
      const res = await signInWithPopup(auth, provider)
      console.log(res.user)
      router.push('/dashboard')
    } catch (error) {
      console.error(error)
    }

  }
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button variant="ghost">← Back</Button>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome aboard.</h1>
          <p className="text-sm text-muted-foreground">Skip the forms. Tap into your Google account.</p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>One-tap Access</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={handleSignup} variant='outline' className="w-full">
              <FcGoogle size={20} />
              Sign-in with Google
            </Button>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground justify-center">
            Secure & powered by Google
          </CardFooter>
        </Card>

      </div>
    </div>
  )
}
