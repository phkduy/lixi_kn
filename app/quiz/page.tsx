 "use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

interface Question {
  text: string
  options: string[]
  correctAnswer: number
}

export default function QuizPage() {
  const searchParams = useSearchParams()
  const phoneNumber = searchParams.get('phone')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  // Example questions - in a real app, these would come from your backend
  const questions: Question[] = [
    {
      text: "Tết Nguyên Đán 2024 là năm con gì?",
      options: ["Rồng", "Mèo", "Rắn", "Ngựa"],
      correctAnswer: 0
    },
    // ... other questions
  ]

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1500)
  }

  if (!phoneNumber) {
    return <div>Unauthorized</div>
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-red-900 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-yellow-500">Kết Quả</h2>
          <p className="text-2xl text-yellow-100">
            Số câu đúng: {score}/{questions.length}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-red-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center mb-8">
          <p className="text-lg text-yellow-100">Câu hỏi {currentQuestion + 1}/{questions.length}</p>
        </div>

        <div className="bg-red-800 p-6 rounded-lg border-2 border-yellow-500">
          <h2 className="text-xl font-bold text-yellow-500 mb-6">
            {questions[currentQuestion].text}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`w-full h-12 text-lg ${
                  selectedAnswer === null
                    ? 'bg-yellow-500 text-red-900 hover:bg-yellow-400'
                    : selectedAnswer === index
                    ? index === questions[currentQuestion].correctAnswer
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-500 text-white'
                }`}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}