import Image from 'next/image'
import { useEffect, useState } from 'react'

export function ImageGallery() {
  const [images, setImages] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/images')
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
        setLoading(false)
      })
      .catch((err) => {
        setError('Failed to load images')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="mt-12 text-yellow-400">
        Loading images...
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-12 text-yellow-400">
        {error}
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="mt-12 text-yellow-400">
        No images found
      </div>
    )
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">Hình Ảnh</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square group">
            <Image
              src={`/images/${image}`}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}