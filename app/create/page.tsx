"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface QuizQuestion {
  text: string
  options: string[]
  correctAnswer: number
}

export default function CreatePage() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([{
    text: "",
    options: ["", "", "", ""],
    correctAnswer: 0
  }])

  const addQuestion = () => {
    setQuestions([...questions, {
      text: "",
      options: ["", "", "", ""],
      correctAnswer: 0
    }])
  }

  const updateQuestion = (index: number, field: keyof QuizQuestion, value: any) => {
    const newQuestions = [...questions]
    if (field === "options") {
      newQuestions[index].options[value.index] = value.text
    } else {
      newQuestions[index][field] = value
    }
    setQuestions(newQuestions)
  }

  const handleSubmit = async () => {
    // Here you would implement the logic to save the quiz
    console.log(questions)
  }

  return (
    <div className="min-h-screen bg-red-900 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-500 mb-8">Tạo Câu Đố Mới</h1>

        <div className="space-y-8">
          {questions.map((question, qIndex) => (
            <div key={qIndex} className="bg-red-800 p-6 rounded-lg border-2 border-yellow-500">
              <div className="space-y-4">
                <Textarea
                  placeholder="Nhập câu hỏi"
                  value={question.text}
                  onChange={(e) => updateQuestion(qIndex, "text", e.target.value)}
                  className="bg-white/10 border-yellow-500 text-yellow-100"
                />

                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <div key={oIndex} className="flex gap-2">
                      <Input
                        placeholder={`Đáp án ${oIndex + 1}`}
                        value={option}
                        onChange={(e) => updateQuestion(qIndex, "options", { index: oIndex, text: e.target.value })}
                        className="bg-white/10 border-yellow-500 text-yellow-100"
                      />
                      <Button
                        variant="outline"
                        className={`w-24 ${question.correctAnswer === oIndex ? 'bg-yellow-500 text-red-900' : 'border-yellow-500 text-yellow-500'}`}
                        onClick={() => updateQuestion(qIndex, "correctAnswer", oIndex)}
                      >
                        {question.correctAnswer === oIndex ? "Đúng" : "Chọn"}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="flex gap-4">
            <Button
              onClick={addQuestion}
              className="bg-yellow-500 text-red-900 hover:bg-yellow-400"
            >
              Thêm Câu Hỏi
            </Button>

            <Button
              onClick={handleSubmit}
              className="bg-green-500 text-white hover:bg-green-400"
            >
              Lưu Câu Đố
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 