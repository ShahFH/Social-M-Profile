'use client'

import { useState, useRef, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Download, Upload, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

const effects = [
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundColor: '#006fff',
    type: 'solid'
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundGradient: 'linear-gradient(135deg, #000428, #004e92)',
    type: 'gradient'
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundColor: '#1d1c1c',
    type: 'solid',
    isBlackAndWhite: true
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundGradient: 'linear-gradient(135deg, #41295a, #2F0743)',
    type: 'gradient'
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundColor: '#fd5732',
    type: 'solid'
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundGradient: 'linear-gradient(135deg, #8E2DE2, #4A00E0)',
    type: 'gradient',
    isBlackAndWhite: true
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundColor: '#800080',
    type: 'solid'
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundColor: '#0000ff',
    type: 'solid'
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundGradient: 'linear-gradient(135deg, #8A2387, #E94057, #F27121)',
    type: 'gradient'
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundColor: '#ffb6c1',
    type: 'solid'
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundColor: '#ffffe0',
    type: 'solid',
    isBlackAndWhite: true
  },
  { 
    outlineWidth: 5, 
    outlineColor: '#ffffff',
    backgroundColor: '#90ee90',
    type: 'solid'
  }
]

export default function PhotoProcessor() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB')
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string
        setImageUrl(dataUrl)
        setError(null)

        // Preload the image
        const img = new Image()
        img.src = dataUrl
        img.onload = () => {
          imageRef.current = img
        }
      }
      reader.onerror = () => {
        setError("Failed to load the image. Please try another file.")
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const downloadEffect = useCallback((effect: typeof effects[0], index: number) => {
    if (!imageRef.current || !imageUrl) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = 400
    canvas.height = 400

    // Draw background
    if (effect.type === 'gradient') {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      const gradientColors = effect.backgroundGradient!.match(/#[a-fA-F0-9]{6}/g)
      if (gradientColors) {
        gradientColors.forEach((color, i) => {
          gradient.addColorStop(i / (gradientColors.length - 1), color)
        })
      }
      ctx.fillStyle = gradient
    } else {
      ctx.fillStyle = effect.backgroundColor
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Calculate dimensions to maintain aspect ratio
    const img = imageRef.current
    const scale = Math.min(
      canvas.width / img.width,
      canvas.height / img.height
    )
    const x = (canvas.width - img.width * scale) / 2
    const y = (canvas.height - img.height * scale) / 2
    const width = img.width * scale
    const height = img.height * scale

    // Apply outline effect
    ctx.filter = `
      drop-shadow(${effect.outlineWidth}px 0 0 ${effect.outlineColor})
      drop-shadow(-${effect.outlineWidth}px 0 0 ${effect.outlineColor})
      drop-shadow(0 ${effect.outlineWidth}px 0 ${effect.outlineColor})
      drop-shadow(0 -${effect.outlineWidth}px 0 ${effect.outlineColor})
    `

    // Draw the image
    ctx.drawImage(img, x, y, width, height)

    // Apply black and white effect if specified
    if (effect.isBlackAndWhite) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
        data[i] = avg
        data[i + 1] = avg
        data[i + 2] = avg
      }
      ctx.putImageData(imageData, 0, 0)
    }

    // Download the result
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `profile_effect_${index + 1}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      }
    }, 'image/png')
  }, [imageUrl])

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-blue-200">
            Create Your Perfect Profile Picture
          </h1>
          <p className="text-purple-200/80 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Upload your photo and apply stunning effects in seconds.
          </p>
        </div>

        <div className="flex justify-center">
          <label className="w-full max-w-2xl relative group cursor-pointer">
            <Input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              ref={fileInputRef}
              className="hidden"
            />
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-purple-500 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:border-pink-500 transition-all duration-300">
              {isProcessing ? (
                <div className="flex flex-col items-center">
                  <Loader2 className="w-16 h-16 text-purple-500 animate-spin" />
                  <p className="mt-4 text-xl text-purple-200">Processing your image...</p>
                </div>
              ) : (
                <>
                  <Upload className="w-16 h-16 text-purple-500 group-hover:text-pink-500 transition-colors duration-300" />
                  <p className="mt-4 text-xl text-purple-200 group-hover:text-white transition-colors duration-300">
                    Drop your image here or click to upload
                  </p>
                  <p className="mt-2 text-sm text-purple-300">PNG, JPG up to 10MB</p>
                </>
              )}
            </div>
          </label>
        </div>

        {error && (
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {imageUrl && (
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Choose Your Effect
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {effects.map((effect, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1"
                  style={effect.type === 'gradient' ? 
                    { background: effect.backgroundGradient } : 
                    { backgroundColor: effect.backgroundColor }
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img 
                    src={imageUrl}
                    alt="Effect preview"
                    className="w-full h-64 object-cover"
                    style={{
                      filter: `
                        drop-shadow(${effect.outlineWidth}px 0 0 ${effect.outlineColor})
                        drop-shadow(-${effect.outlineWidth}px 0 0 ${effect.outlineColor})
                        drop-shadow(0 ${effect.outlineWidth}px 0 ${effect.outlineColor})
                        drop-shadow(0 -${effect.outlineWidth}px 0 ${effect.outlineColor})
                        ${effect.isBlackAndWhite ? 'grayscale(100%)' : ''}
                      `
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <Button
                      onClick={() => downloadEffect(effect, index)}
                      className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-md transition-all duration-300 flex items-center gap-2"
                    >
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

