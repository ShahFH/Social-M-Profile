import PhotoProcessor from '../components/PhotoProcessor'
import Background from '../components/Background'

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-[#010314] text-white relative overflow-hidden">
      <Background />
      <div className="relative z-10">
        <PhotoProcessor />
      </div>
    </div>
  )
}

