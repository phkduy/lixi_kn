"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
  question: {
    text: string
    options: string[]
    correctAnswer: number
  }
}

export function QuizModal({ isOpen, onClose, question }: QuizModalProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowResult(true)
  }

  const isCorrect = selectedAnswer === question.correctAnswer

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-red-900 border-yellow-400">
        <DialogHeader>
          <DialogTitle className="text-yellow-400 text-xl mb-4">Câu Hỏi May Mắn</DialogTitle>
        </DialogHeader>
        
        <div className="text-yellow-300">
          <p className="mb-6 text-lg">{question.text}</p>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`w-full text-left justify-start p-4 h-auto ${
                  showResult
                    ? index === question.correctAnswer
                      ? "bg-green-600 hover:bg-green-600"
                      : index === selectedAnswer
                      ? "bg-red-600 hover:bg-red-600"
                      : "bg-gray-700 hover:bg-gray-700"
                    : "bg-yellow-400 text-red-900 hover:bg-yellow-500"
                }`}
              >
                {String.fromCharCode(65 + index)}. {option}
              </Button>
            ))}
          </div>

          {showResult && (
            <div className="mt-6 text-center">
              <p className={`text-xl mb-4 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {isCorrect ? 'Chúc mừng! Bạn đã trả lời đúng!' : 'Rất tiếc! Bạn đã trả lời sai!'}
              </p>
              <Button
                onClick={onClose}
                className="bg-yellow-400 text-red-900 hover:bg-yellow-500"
              >
                Đóng
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 