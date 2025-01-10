import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      )
    }

    // Convert file to base64
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64Image = buffer.toString('base64')

    // Call remove.bg API
    const response = await fetch('remove bg service provided link here', {
      method: 'POST',
      headers: {
        'X-Api-Key': 'api key here',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_file_b64: base64Image,
        size: 'regular', // 625x400 pixels
        type: 'profile', // Optimize for profile photos
        format: 'png',
        crop: true,
        crop_margin: '0',
        scale: 'fit',
        position: 'center',
      }),
    })

    if (!response.ok) {
      throw new Error('Failed to remove background')
    }

    const data = await response.blob()
    
    return new NextResponse(data, {
      headers: {
        'Content-Type': 'image/png',
      },
    })

  } catch (error) {
    console.error('Error processing image:', error)
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    )
  }
}

