'use client'

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { CreateRoomButton } from "@/components/create-room-button"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { collection, getDocs, Timestamp } from "firebase/firestore"
import { db } from "@/firebase"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

interface Room {
  id: string;
  roomName: string;
  owner: string;
  description: string;
  createdAt: Timestamp;
}

export default function DashboardPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const { user, loading } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [loading, user, router]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const snapshot = await getDocs(collection(db, "rooms"));
        const roomsData = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          } as Room;
        });
        setRooms(roomsData);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 px-4 py-6 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Debate Rooms</h1>
            <p className="text-muted-foreground text-sm sm:text-base">Join an existing debate or create your own room</p>
          </div>
          <CreateRoomButton />
        </div>

        <div className="grid gap-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input type="search" placeholder="Search rooms..." className="w-full sm:max-w-xs" />
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsContent value="active" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {rooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

interface RoomCardProps {
  room: Room;
}

function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg sm:text-xl">
          <Link href={`/rooms/${room.id}`} className="hover:text-primary transition-colors">
            {room.roomName}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <span>•</span>
          <span>Created {room.createdAt.toDate().toLocaleString('en-GB')}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-3 flex justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={"/placeholder.svg"} alt={room.owner || ""} />
            <AvatarFallback>{room.owner?.split(' ').map(word => word[0]).join('') || "?"}</AvatarFallback>
          </Avatar>
          <span className="text-xs sm:text-sm font-medium">{room.owner || "Unknown"}</span>
        </div>
        <Badge>Live Now</Badge>
      </CardFooter>
    </Card>
  );
}
