"use client"

import { useState } from 'react'
import Image from 'next/image'
import { QuizModal } from './QuizModal'

const questions = [
  {
    text: "Tết Nguyên Đán 2024 là năm con gì?",
    options: ["Rồng", "Mèo", "Rắn", "Ngựa"],
    correctAnswer: 0
  },
  {
    text: "Câu chúc Tết nào sau đây không phổ biến?",
    options: [
      "Vạn sự như ý",
      "An khang thịnh vượng",
      "Cung hỷ phát tài",
      "Mau ăn chóng lớn"
    ],
    correctAnswer: 3
  },
  {
    text: "Bánh chưng có hình dạng gì?",
    options: ["Vuông", "Tròn", "Tam giác", "Chữ nhật"],
    correctAnswer: 0
  },
  {
    text: "Hoa mai có màu gì?",
    options: ["Đỏ", "Vàng", "Trắng", "Hồng"],
    correctAnswer: 1
  },
  {
    text: "Tục lệ xông đất vào mùng mấy Tết?",
    options: ["Mùng 1", "Mùng 2", "Mùng 3", "Mùng 4"],
    correctAnswer: 0
  }
]

export function RedEnvelopes() {
  const [openEnvelopeIndex, setOpenEnvelopeIndex] = useState<number | null>(null)
  const [openedEnvelopes, setOpenedEnvelopes] = useState<number[]>([])

  const handleEnvelopeClick = (index: number) => {
    if (!openedEnvelopes.includes(index)) {
      setOpenEnvelopeIndex(index)
      setOpenedEnvelopes([...openedEnvelopes, index])
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-5 gap-4 md:gap-8">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`cursor-pointer transform transition-transform hover:scale-105 ${
              openedEnvelopes.includes(index) ? 'opacity-50' : ''
            }`}
            onClick={() => handleEnvelopeClick(index)}
          >
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/envelope.png" // Make sure to add this image
                alt={`Red Envelope ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {openEnvelopeIndex !== null && (
        <QuizModal
          isOpen={true}
          onClose={() => setOpenEnvelopeIndex(null)}
          question={questions[openEnvelopeIndex]}
        />
      )}
    </div>
  )
} 