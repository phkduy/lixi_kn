import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/images')
  
  try {
    const imageFiles = fs.readdirSync(imagesDirectory)
    // Filter for image files only
    const images = imageFiles.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    )
    
    return NextResponse.json(images)
  } catch (error) {
    console.error('Error reading images directory:', error)
    return NextResponse.json([], { status: 500 })
  }
} 