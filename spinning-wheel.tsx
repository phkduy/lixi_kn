"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function SpinningWheel() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)

  const spinWheel = () => {
    if (isSpinning) return

    setIsSpinning(true)
    const spins = 5 // Number of full rotations
    const degrees = 360 * spins + Math.random() * 360 // Random final position
    const duration = 5000 // 5 seconds

    setRotation(degrees)

    setTimeout(() => {
      setIsSpinning(false)
    }, duration)
  }

  return (
    <div className="relative">
      <div
        className="w-80 h-80 mx-auto border-8 border-yellow-400 rounded-full relative transition-transform duration-5000 ease-out"
        style={{
          transform: `rotate(${rotation}deg)`,
          transitionDuration: isSpinning ? "5s" : "0s",
        }}
      >
        {/* Wheel segments */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-full"
            style={{
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: "50% 50%",
            }}
          >
            <div className="w-0.5 h-full bg-yellow-400 mx-auto" />
          </div>
        ))}
      </div>

      {/* Center point */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Spin button */}
      <Button
        onClick={spinWheel}
        disabled={isSpinning}
        className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-red-900 font-bold px-8 py-4 text-xl rounded-full"
      >
        {isSpinning ? "Đang Quay..." : "Quay"}
      </Button>
    </div>
  )
}

