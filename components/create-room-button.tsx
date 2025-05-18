"use client"

import { use, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Plus } from 'lucide-react'
import { auth, db } from "@/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useRouter } from "next/navigation"
export function CreateRoomButton() {
  const [open, setOpen] = useState(false)
  const [roomData, setRoomData] = useState({
    roomName: '',
    description: '',
  })
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "rooms"), {
        roomName: roomData.roomName,
        description: roomData.description,
        owner: auth.currentUser?.displayName || auth.currentUser?.uid,
        createdAt: serverTimestamp()
      });
      console.log("Document written with ID: ", docRef.id);
      router.push(`rooms/${docRef.id}`)
    } catch (error) {
      console.error(error)
    }
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Room
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create a New Debate Room</DialogTitle>
            <DialogDescription>
              Fill in the details below to start a new debate. Click create when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Debate Title</Label>
              <Input
                id="title"
                onChange={(e) => setRoomData(prev => ({ ...prev, roomName: e.target.value }))}
                placeholder="Enter a clear, concise title for your debate"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                onChange={(e) => setRoomData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Provide context and key points for discussion"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Debate Room</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
