"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, ArrowLeft, Trash2Icon } from "lucide-react"
import Link from "next/link"
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, orderBy, query, serverTimestamp, Timestamp } from "firebase/firestore"
import { auth, db } from "@/firebase"
import { useAuth } from "@/hooks/useAuth"

export type MessageType = {
  id: string;
  debater: string;
  message: string;
  stance: string;
  messagedAt?: Timestamp;
};

export type Participant = {
  debater: string;
  stance: string;
};

export default function Page() {
  const params = useParams()
  const roomId = params.id as string
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [messageInput, setMessageInput] = useState("")
  const [stance, setStance] = useState("pro")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [roomName, setRoomName] = useState('')
  const [isOwner, setIsOwner] = useState('')
  const router = useRouter()

  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [loading, user, router]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const stanceColors = {
    pro: "bg-green-950 border-green-600 text-green-100",
    con: "bg-red-950 border-red-600 text-red-100",
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    await addMessage(roomId, {
      debater: auth.currentUser?.displayName || 'Unknown',
      message: messageInput,
      stance: stance
    })
    setMessageInput('')
  }

  const addMessage = async (roomId: string, {
    debater,
    message,
    stance
  }: {
    debater: string,
    message: string,
    stance: string
  }) => {
    try {
      const subColRef = collection(db, "rooms", roomId, "messages");
      await addDoc(subColRef, {
        debater,
        message,
        stance,
        messagedAt: serverTimestamp()
      });
    } catch (err) {
      console.error("Error adding message: ", err);
    }
  }

  useEffect(() => {
    const messagesRef = collection(db, "rooms", roomId, "messages");
    const q = query(messagesRef, orderBy("messagedAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: MessageType[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as MessageType[];

      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [roomId]);

  useEffect(() => {
    const fetchRoomOwner = async () => {
      try {
        const docRef = doc(db, "rooms", roomId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setRoomName(data.roomName);
          setIsOwner(data.owner)
        } else {
          console.log("No such room found.");
        }
      } catch (err) {
        console.error("Failed to fetch room owner:", err);
      }
    };

    if (roomId) {
      fetchRoomOwner();
    }
  }, [roomId]);

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "rooms", roomId));
      router.push('/dashboard')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-2 sm:px-6">
          {/* Left: Back Button */}
          <Link href="/dashboard" className="mr-2 sm:mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to Dashboard</span>
            </Button>
          </Link>

          {/* Center: Room Name */}
          <div className="flex flex-1 items-center justify-center">
            <h1 className="text-base sm:text-xl font-bold text-center truncate max-w-[60vw]">{roomName}</h1>
          </div>

          {/* Right: Delete Button */}
          <div className="flex items-center gap-2 mr-2 sm:mr-4">
            {isOwner===auth.currentUser?.displayName ? (
              <Button onClick={handleDelete} variant="ghost" size="icon">
                <Trash2Icon className="h-5 w-5" />
              </Button>
            ):<span> </span>}
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 p-2 sm:p-4">
            <div className="space-y-3 sm:space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="flex gap-2 sm:gap-3">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src={auth.currentUser?.photoURL || "/placeholder.svg"} alt={auth.currentUser?.displayName || 'Unknown'} />
                    <AvatarFallback>{auth.currentUser?.displayName?.split(' ').map(word => word[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                      <span className="font-medium text-sm sm:text-base">{msg.debater}</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${msg.stance === "pro" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"}`}
                      >
                        {msg.stance === "pro" ? "Pro" : "Con"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{msg.messagedAt?.toDate?.().toLocaleString() ?? ""}</span>
                    </div>
                    <div className={`rounded-lg border p-2 sm:p-3 break-words ${msg.stance === "pro" ? stanceColors.pro : stanceColors.con}`}>
                      {msg.message}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Message input */}
          <div className="border-t border-border/40 bg-background p-2 sm:p-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3">
              <div className="flex items-center justify-center">
                <Tabs value={stance} onValueChange={setStance} className="w-full max-w-[200px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      value="pro"
                      className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                    >
                      Pro
                    </TabsTrigger>
                    <TabsTrigger value="con" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                      Con
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type your argument..."
                  className="flex-1"
                />
                <Button type="submit" disabled={!messageInput.trim()} className="w-full sm:w-auto">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
