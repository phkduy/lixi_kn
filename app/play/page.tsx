"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PlayPage() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phoneNumber.length >= 10) {
      router.push(`/quiz?phone=${phoneNumber}`)
    }
  }

  return (
    <div className="min-h-screen bg-red-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-8">
          Nhập Số Điện Thoại Để Bắt Đầu
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="tel"
            placeholder="Số điện thoại của bạn"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="h-12 text-lg bg-white/10 border-2 border-yellow-500 text-yellow-100 placeholder:text-yellow-100/50"
            required
          />
          
          <Button 
            type="submit"
            className="w-full h-12 text-lg font-bold bg-yellow-500 text-red-900 hover:bg-yellow-400"
          >
            Bắt Đầu
          </Button>
        </form>

        <div className="flex gap-4 justify-center mt-8">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-900 font-bold px-6"
              >
                Thể Lệ
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-red-900 border-2 border-yellow-500 max-w-2xl max-h-[80vh] overflow-y-auto">
              {/* Existing Thể Lệ content */}
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-red-900 font-bold px-6"
              >
                Giải Thưởng
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-red-900 border-2 border-yellow-500">
              {/* Existing Giải Thưởng content */}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
} 